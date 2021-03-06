import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

function CartTotal({ getTotalPrice, getCount }) {

    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} items): 
                {/* formating numbers */}
                <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
            </Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    flex: 0.3;
    padding: 20px;
    background-color: white;
`
const Subtotal = styled.h2`
    margin-bottom: 16px;
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 4px 8px;
    background-color: #fcc623;
    border: 2px solid #fcc623;
    border-radius: 7px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background-color: #f0c14b;
        border-color: #f0c14b;
    }
`

