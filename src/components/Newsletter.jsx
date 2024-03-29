
import React from 'react';
import styled from 'styled-components';
import {Send} from '@mui/icons-material';
import {mobile}  from '../responsive';

const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom:20px;
`;

const Description = styled.p`
    font-size: 24px;
    font-weight:300px;
    margin-bottom:20px;
    margin-top:20px;
    ${mobile({
      textAlign:`center`
    })}
`;

const InputContainer = styled.div`
    height: 40px;
  background-color: white;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({
    width:"80%"
  })}
`;

const Input = styled.input`
  border: none;
  height:100%;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  height:100%;
  border-radius:2px;
  background-color: purple;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &: hover{
    transform: scale(1.1);
  }
`;



const Newsletter = () => {
    return (
      <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
          <Input placeholder="Your email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Container>
    );
  };
  
  export default Newsletter;