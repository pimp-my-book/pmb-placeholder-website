import React from 'react'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
 from {
     transform: translate(0, 0px);
 }
 65% {
     transform: translate(0, 15px);
 }
 to {
     transform: translate(0, -0px);
 }
`

const CardStyles = styled.div`
width: 253px;
height: 150px;
background: white;
border-radius:10px;
animation: ${float} 5s infinite ease-in-out;
`
const CardInset = styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content: center;

`

const Card = ({
    heading,
    text
}) => {
    return (
        <>
            <CardStyles>
                <CardInset>
                    <h3>{heading}</h3>
                    <p>{text}</p>
                </CardInset>

            </CardStyles>

        </>
    )
}

export default Card