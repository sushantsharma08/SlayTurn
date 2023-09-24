import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
// import { Link } from `react-router-dom`
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const linkStyle = {
    
    textDecoration: "none",
    color: 'black'
    
  };
const Container = styled.div`
    display: flex;
    ${mobile({
        flexDirection: "column"
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color:#${(props)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        display: "none"
    })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px; 
    ${mobile({
        backgroundColor: "#eee"
    })}
`
const ContactItem = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    
`
const Payment = styled.img`
    width: 50%;

`
// const Link = styled.a`
//   color: black;
//   text-decoration: none;

//   &:visited {
//     color: black;
//   }
// `
export default function Footer() {
    const user = useSelector((state) => state.user);
  return (
    <Container>
        <Left>
            <Logo>
                <Link to="/" style={linkStyle}>SlayTurn</Link>
            </Logo>
            <Desc>
                A Stark Industries Product.<br/>
                The Stark industries brings you the finest of all products, A legacy of Tony Stark
                and team now maintained by Sourabh Kothari. Products are available on select stores that are franchises of Stark Industries
                in select countries.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023"> 
                    <Pinterest/>
                </SocialIcon>
                
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            {/* <List>
                <ListItem>
                    <Link href="/">HOME</Link>
                </ListItem>
                <ListItem>
                    <Link href="/products">PRODUCTS</Link>
                </ListItem>
                <ListItem>
                    <Link href="/register">REGISTER</Link>
                </ListItem>
                <ListItem>
                    <Link href="/login">LOGIN</Link>
                </ListItem>
                <ListItem>
                    <Link href="/cart">CART</Link>
                </ListItem>
            </List> */}
            <List>
                <ListItem>
                    <Link to="/" style={linkStyle}>HOME</Link>
                </ListItem>
                <ListItem>
                    <Link to="/products" style={linkStyle}>PRODUCTS</Link>
                </ListItem>
                <ListItem>
                    <Link to="/register" style={linkStyle}>REGISTER</Link>
                </ListItem>
                <ListItem>
                    <Link to="/login" style={linkStyle}>LOGIN</Link>
                </ListItem>
                <ListItem>
                    {user.currentUser === null?(
                        <Link to="/login" style={linkStyle}>CART</Link>
                    ):(
                        <Link to="/cart" style={linkStyle}>CART</Link>
                    )}
                </ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 120-K-1, Scheme No. 71, Sector A <br /> Indore, M.P.
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +91 8109551792
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> kotharisourabh06@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}
