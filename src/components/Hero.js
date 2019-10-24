import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/pmb_logo.svg'

const HeroGrid = styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content: center;

`

const HeroHeading = styled.h1`
color: white;
text-align: center;
`
const Hero = () => {
    return (
        <>
            <HeroGrid>

                <img alt="PMB Logo" src={Logo} />
                <HeroHeading>
                    We are focused on making education accessible
                </HeroHeading>
            </HeroGrid>


        </>
    )
}

export default Hero