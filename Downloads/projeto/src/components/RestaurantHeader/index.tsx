import React from 'react';
import { Link } from 'react-router-dom';
import {
    HeaderContainer,
    NavContainer,
    CartLink,
    HeroImage,
    CategoryText,
    RestaurantTitle
} from './styles';

interface RestaurantHeaderProps {
    title: string;
    category: string;
    cartItems: number;
}

const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({
    title,
    category,
    cartItems
}) => {
    return (
        <HeaderContainer>
            <NavContainer>
                <Link to="/">Restaurantes</Link>
                <CartLink>{cartItems} produto(s) no carrinho</CartLink>
            </NavContainer>

            <HeroImage>
                <CategoryText>{category}</CategoryText>
                <RestaurantTitle>{title}</RestaurantTitle>
            </HeroImage>
        </HeaderContainer>
    );
};

export default RestaurantHeader;