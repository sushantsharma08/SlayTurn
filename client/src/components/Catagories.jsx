import React from 'react'
import { categories } from '../data'
import styled from 'styled-components'
import CatagoryItem from './CatagoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({
      padding:"0px",
      flexDirection: "column",
    })}


`

export default function Catagories() {
  return (
    <Container>
        {categories.map(items=>(
            <CatagoryItem item={items} key={items.id}/>
        ))}
    </Container>
  )
}
