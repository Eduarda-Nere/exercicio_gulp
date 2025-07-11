import styled from 'styled-components';

export const RestaurantList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    padding: 80px;
    max-width: 1024px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;