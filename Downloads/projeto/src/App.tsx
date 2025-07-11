import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetail';
import CartSidebar from './components/CartSidebar';
import { GlobalStyle } from './styles/global';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    setShowCart(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/restaurante/:id" 
            element={
              <RestaurantDetails 
                onAddToCart={addToCart} 
                cartItems={cartItems} 
              />
            } 
          />
        </Routes>
        
        {showCart && (
          <>
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              zIndex: 1000
            }} onClick={() => setShowCart(false)} />
            <CartSidebar 
              items={cartItems} 
              onRemoveItem={removeFromCart}
              onClose={() => setShowCart(false)}
            />
          </>
        )}
      </Router>
    </>
  );
}

export default App;