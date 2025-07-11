import React, { useState } from 'react';
import {
    FoodCardContainer,
    FoodImageWrapper,
    FoodImage,
    FoodContent,
    FoodName,
    FoodDescription,
    AddToCartButton
} from './styles';
import FoodModal from '../foodModal';

type FoodCardProps = {
    image: string;
    name: string;
    description: string;
    price: number;
    serves: string;
    onAddToCart: () => void;
};

const FoodCard: React.FC<FoodCardProps> = ({
    image,
    name,
    description,
    price,
    serves,
    onAddToCart
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddToCartFromModal = () => {
        onAddToCart();
        setIsModalOpen(false);
    };

    return (
        <>
            <FoodCardContainer>
                <FoodImageWrapper onClick={handleImageClick}>
                    <FoodImage src={image} />
                </FoodImageWrapper>
                <FoodContent>
                    <FoodName>{name}</FoodName>
                    <FoodDescription>{description}</FoodDescription>
                    <AddToCartButton onClick={onAddToCart}>
                        Adicionar ao carrinho - R$ {price.toFixed(2).replace('.', ',')}
                    </AddToCartButton>
                </FoodContent>
            </FoodCardContainer>

            {isModalOpen && (
                <FoodModal
                    image={image}
                    name={name}
                    description={description}
                    price={price}
                    serves={serves}
                    onClose={handleCloseModal}
                    onAddToCart={handleAddToCartFromModal}
                />
            )}
        </>
    );
};

export default FoodCard;