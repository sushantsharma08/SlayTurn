import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../responsive';

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
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px" })}

`
const Centre = styled.div`
    flex: 1;
    text-align: center;
`;
export default function NavbarLessPopulated() {
    const linkStyle = {
    
        textDecoration: "none",
        color: 'black'
        
      };
    return (
        <Container>
            <Wrapper>
            <Centre>
                    <Logo>
                        <Link to="/" style={linkStyle}>SlayTurn</Link>
                    </Logo>
                </Centre>
            </Wrapper>
        </Container>
    )
}