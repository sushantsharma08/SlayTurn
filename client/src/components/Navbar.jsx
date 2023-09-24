import React from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import {Search,ShoppingCartOutlined} from '@material-ui/icons'
import { mobile } from '../responsive';
import { useDispatch, useSelector } from "react-redux";
import { logProcess } from "../redux/apiCalls";
import { emptyCart } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import { Link } from 'react-router-dom'


const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px" })}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({width:"50px" })}

`;
const Centre = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px" })}

`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent:"center", flex:2 })}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft: "10px"})}
    
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none" })}

`;

export default function Navbar() {
    const cart = useSelector((state) => state.cart);

    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogOut = () => {

        handleLogOutData(cart.initial, cart.products, user);
        dispatch(emptyCart());
        logProcess(dispatch);
      }

      const handleLogOutData = async(initial,pro,user) =>{
        let data = []
    
        pro.forEach((element, index) => {
          if (initial === 0) {
            data = [
              ...data,
              {
                 "product": [{
                    "product_id":element.product_id,
                    "img":element.img,
                    "title":element.title,
                    "size":"S",
                    "color":"#C8AE95",
                    "price":element.price,
                }],
                "quantity": element.quantity
              },
            ];
          } else {
            initial = initial - 1;
          }
        });
        const TOKEN = `${user.currentUser.accessToken}`;
        const res = await publicRequest.put(`/carts/${user.currentUser._id}`, data, {
        headers: { token: `Bearer ${TOKEN}` },
    });
    }
    const linkStyle = {
    
      textDecoration: "none",
      color: 'black'
      
    };
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color: "gray", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Centre>
                <Logo>
                    <Link to="/" style={linkStyle}>SlayTurn</Link>
                </Logo>
            </Centre>
            <Right>
                {/* <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                 */}
                 {user.currentUser === null ? (
            <>
              <Link to="/login" style={linkStyle}>
                <MenuItem>SIGN IN</MenuItem>
              </Link>
              <Link to="/register" style={linkStyle}>
                <MenuItem>SIGN UP</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <MenuItem>{user.currentUser.username.toUpperCase()}</MenuItem>
              <MenuItem onClick={handleLogOut}>LOG OUT</MenuItem>
            </>
          )}
                {user.currentUser === null ?(
                  <Link to="/login" style={linkStyle}>

                  <MenuItem>

                      <Badge badgeContent={quantity} color="primary">
                          <ShoppingCartOutlined/>
                      </Badge>
                      
                  </MenuItem>
                  </Link>
                ):(
                  <Link to="/cart" style={linkStyle}>

                      <MenuItem>

                          <Badge badgeContent={quantity} color="primary">
                              <ShoppingCartOutlined/>
                          </Badge>
                          
                      </MenuItem>
                  
                  </Link>
                  
                )}
            </Right>

        </Wrapper>
    </Container>
  )
}
