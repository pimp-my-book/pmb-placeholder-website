import React from 'react';
import Hero from './components/Hero'
import Card from './components/Card'
function App() {
  return (
    <div>
      <Hero />
      <div>
        <Card
          heading="GOA"
          text="Our burasry management app"
        />
      </div>
    </div>
  );
}

export default App;
