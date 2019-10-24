import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/pmb_logo.svg'

const HeroGrid = styled.div`
display: flex;
align-items:center;
justify-content: center;

`
const Hero = () => {
    return (
        <>
            <HeroGrid>

                <img alt="PMB Logo" src={Logo} />
            </HeroGrid>


        </>
    )
}

export default Hero