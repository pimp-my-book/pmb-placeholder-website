import React from 'react';
import styled from 'styled-components'
import Hero from './components/Hero'
import Card from './components/Card'

const CardGrid = styled.div`
display: grid;
grid-gap:10px;
align-items: center;
justify-items: center;
grid-template-columns: repeat(auto-fit, minmax(320px,1fr));
`

const LinkStyles = styled.a`

  text-decoration: none;
color: black;

`
function App() {
  return (
    <div>
      <Hero />
      <CardGrid>
        <LinkStyles href="https://gogoa.co.za">
        <Card
          heading="GOA"
          text="Our burasry management app"
        />
        </LinkStyles>
        <LinkStyles href="https://newsroom.pimpmybook.co.za">
        <Card
          heading="Newsroom"
          text="Our blog"
        />
        </LinkStyles>
        <Card
          heading="PMB +"
          text="Forthcoming marketplace
          service"
        />
      </CardGrid>
    </div>
  );
}

export default App;
