import styled from "styled-components";

const CustomButton = styled.button`
    appearance: none;

    margin: 10px;
    padding: 0.5rem 1rem;
    
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    
    display: inline-block;
    width: auto;
    
    border: none;
    border-radius: 15px;

    background: #DDDDDD;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background: #BBBBBB;
      outline: 0;
    }
`;

export default CustomButton;