import React from 'react';
import { Container } from 'react-bootstrap';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { HomePage } from './pages/home.page.component';

function App() {
  return (
    <>
    <HeaderComponent />
      <main className='mt-3'>
        <Container>          
          <HomePage />
        </Container>
      </main>
     <FooterComponent />
    </>
  );
}

export default App;
