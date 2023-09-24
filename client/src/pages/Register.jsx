import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { publicRequest } from "../requestMethods";
// const CryptoJS = require("crypto-js");

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 50%;
    padding: 20px;
    background-color: white;
    ${mobile({
        width: "80%"
    })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    margin-top: 15px;
    
    width: 40%;
    border: none;
    padding: 15px 20px ;
    background-color: teal;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
        background-color: rgb(10, 87, 87);
    }
`
export default function Register() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password, setC_password] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== c_password)
               return
    
        const data = {
          firstname,
          lastname,
          username,
          email,
          password, 
          
        };
    
        const res = await publicRequest.post("/auth/register", data);
        console.log(res.status);
        if (res.status === 201) window.location.replace("/login");
      };
      
  return (
    <Container>
        <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form id="login-form" onSubmit={(e) => handleSubmit(e)}>
                    <Input id="1" placeholder="name" required="true" onChange={(e) => setFirstname(e.target.value)}></Input>
                    <Input id="2" placeholder="last name" required="true" onChange={(e) => setLastname(e.target.value)}></Input>
                    <Input id="3" placeholder="username" required="true" onChange={(e) => setUsername(e.target.value)}></Input>
                    <Input
                        id="4"
                        type="email"
                        placeholder="email"
                        required="true"
                        onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                    <Input
                        id="5"
                        type="password"
                        placeholder="password"
                        required="true"
                        onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                    <Input
                        id="6"
                        type="password"
                        placeholder="confirm password"
                        required="true"
                        onChange={(e) => setC_password(e.target.value)}
                    ></Input>
                    <Agreement>
                        By creating an account I agree to the terms and conditions .
                    </Agreement>
                    <Button onClick={handleSubmit}>CREATE</Button>
                    </Form>
                
            
        </Wrapper>
    </Container>
  )
}
