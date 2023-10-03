import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";
import { emptyCart } from "../redux/cartRedux";
import { Link } from 'react-router-dom'
const KEY = 'pk_test_51Nn3ejSIYmQACD5LLH3TZEb4ZccbPnZ3AyZly54VKdsOTwLT7J6dtvkTNqSrYh0ACcWc1n4sSUsOX8HQpfNTQcbl00zz2M4uxS'

const linkStyle = {
    
    textDecoration: "none",
    color: 'black'
    
  };
const Container = styled.div`
    overflow: hidden;
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
        padding:"10px"
    })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    ${mobile({
        margin:"0px 20px"
    })}
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({
        display:"none"
    })}
`
const TopButton = styled.button`
    cursor: pointer;
    padding: 10px;
    font-weight: 600;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    
   
`
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`

const TopText = styled.span`
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
    margin: 0px 10px;
    
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection:"column"
    })}
`
const Info = styled.div`
    flex: 3;
`

const Product =styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection:"column"
    })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;

`

const Image = styled.img`
    width: 200px;

`
const Details = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};

`
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-bottom: 20px;
     
`
const ProductAmount = styled.div`
    margin: 5px;
    font-size: 24px;
    font-weight: 200;
    ${mobile({
        margin:"5px 15px"
    })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({
        marginBottom:"20px"
    })}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 10px 0;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 55vh;
    

`
const SummaryTitle = styled.h1`
    font-weight: 200;

`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
`
const SummaryItemPrice = styled.span`

`
const SummaryItemText = styled.span`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
      background-color: rgb(10, 87, 87);
    }
`
// const Link = styled.a`
//   color: black;
//   text-decoration: none;
//   cursor: pointer;

//   &:visited {
//     color: black;
//   }
// `;


export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate()
    
    const onToken = (token) => {
        setStripeToken(token);
      };
      const deleteCart = async () => {
        dispatch(emptyCart());
        const TOKEN = `${user.currentUser.accessToken}`;
    
        const response = await publicRequest.delete(
          `/carts/${user.currentUser._id}`,
          {
            headers: { token: `Bearer ${TOKEN}` },
          }
        );
        console.log(response);
      };
      useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await userRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: cart.total
            });
            history('/success', {
              stripeData: res.data,
              products: cart });
          } catch {}
        };
        stripeToken && makeRequest();
      }, [stripeToken, cart.total, history]);
      console.log(stripeToken)
    //   console.log(product)
    console.log(cart)
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                <TopButton onClick={() => history(-1)}>CONTINUE SHOPPING </TopButton>{" "}
                    <TopTexts>
                        <TopText>Shopping Bag({cart.quantity})</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">
                        CHECKOUT NOW
                    </TopButton>
                </Top>
                <Bottom>
                <Info>
                    {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  {/* <Image src={product.img} /> */}
                  <Link to={`/product/${product.product_id}`}>
                      <Image src={product.img}></Image>
                    </Link>
                  <Details>

                    <ProductName>
                        <Link to={`/product/${product.product_id}`} style={linkStyle}>
                          <b>Product: </b>
                          {product.title}
                        </Link>
                    </ProductName>

                    <ProductId>
                      <b>ID:</b> {product.product_id}
                    </ProductId>

                    <ProductColor color={product.color} />
                    
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  
                  </Details>
                </ProductDetail>
                
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />

                  </ProductAmountContainer>
                  <ProductPrice>
                    ₹ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
             ))}
            <Hr />
          </Info>
            <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
                    </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>₹5.90</SummaryItemPrice>
                    </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>-5.90</SummaryItemPrice>
                    </SummaryItem>
                        <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="SlayTurn"
                        image="https://cdn.icon-icons.com/icons2/2699/PNG/512/stripe_logo_icon_167962.png"
                        billingAddress
                        shippingAddress
                        description={`Your total is ₹${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                        >
                        <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>
                
            </Summary>

                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
