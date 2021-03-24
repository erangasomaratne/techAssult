import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { HomePage } from './pages/home.page.component';
import { ProductDetailsPage } from './pages/productDetails.page.component';

function App() {
  return (
    <>
    <HeaderComponent />
      <main className='mt-3'>
        <Container>          
          <Switch>
            <Route path='/product/:id' component={ProductDetailsPage }/>
            <Route path='/' exact component={HomePage} />
          </Switch>
        </Container>
      </main>
     <FooterComponent />
    </>
  );
}

export default App;
