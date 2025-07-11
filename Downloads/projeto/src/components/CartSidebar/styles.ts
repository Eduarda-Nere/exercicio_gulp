import styled from 'styled-components';

export const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 350px;
    height: 100vh;
    background-color: #e86464;
    padding: 20px;
    display: flex;
    flex-direction: column;
    z-index: 1001;
    overflow-y: auto;
`;

export const CartItem = styled.div`
    background-color: #fcecdc;
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const ItemImage = styled.img`
    width: 55px;
    height: 55px;
    object-fit: cover;
`;

export const ItemInfo = styled.div`
    flex: 1;
`;

export const ItemName = styled.span`
    color: #e86464;
    font-weight: bold;
    display: block;
    margin-bottom: 4px;
`;

export const ItemPrice = styled.span`
    color: #e86464;
    font-size: 14px;
`;

export const DeleteButton = styled.button`
    background: none;
    border: none;
    color: #e86464;
    cursor: pointer;
    font-size: 18px;
    padding-top: 12px;
    align-self: flex-start;
`;

export const TotalText = styled.p`
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin: 20px 0 10px 0;
    text-align: center;
    padding: 10px;
`;

export const CheckoutButton = styled.button`
    background-color: #fcecdc;
    color: #e86464;
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 0;  
    height: 40px;      
    width: 100%;      
    padding: 0 15px;   
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #fff8e6;
    }
`;

export const ItemQuantity = styled.span`
    color: #e86464;
    font-size: 14px;
    margin-left: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 2px 6px;
    border-radius: 10px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const FormTitle = styled.h2`
    color: white;
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
`;

export const FormInput = styled.input`
    background-color: #fcfaf3;
    color: #e86464;
    border: none;
    padding: 12px 15px;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box; 

    &::placeholder {
        color: #e86464;
        opacity: 0.7;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    gap: 10px;

    & > ${FormInput} {
        flex: 1;
        min-width: 0;
    }

    &.small-inputs {
        & > ${FormInput} {
            flex: 0 1 300px;
            max-width: 170px;
        }
    }
`;

export const FormActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

export const BackButton = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const SuccessMessage = styled.div`
    color: white;
    text-align: center;
    margin-bottom: 30px;

    h3 {
        font-size: 20px;
        margin-bottom: 15px;
    }

    p {
        margin-bottom: 10px;
        line-height: 1.5;
    }
`;