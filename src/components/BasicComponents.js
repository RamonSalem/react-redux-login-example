import styled from 'styled-components';

export const BlueText = styled.span`
  color: #1696e1;
  font-weight: bold;
  font-size: 13px
`;

export const Button = styled.button`
  color: white;
  border-radius: 100px;
  border: none;
  width: 100%;
  height: 40px;
  cursor : pointer;
  margin: 5px;
  background-color: ${props => props.inputColor || "white"} 
`;

export const ButtonLogin = styled.button`
  color: white;
  border-radius: 100px;
  border: none;
  width: 100%;
  height: 40px;
  margin : 1px;
  cursor : ${props => (props.disabled ? "no-drop" : "pointer")};
  background-color: ${props => (props.disabled ? "#7be4d2" : props.inputColor || "white")};
`;

export const Input = styled.input`
color: #00bc9b;
width: 90%;
height: 32px;
border-radius: 5px;
border: solid 1px #d6d9e0;
background-color: #ffffff; 

margin: 5px 5px 5px 5px;
text-indent: 10px;
`;