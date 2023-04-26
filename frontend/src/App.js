import {Container} from 'react-bootstrap'
import { BrowserRouter as Router ,Route, Switch , Redirect, Routes, Outlet} from 'react-router-dom'
import Header from "./commponents/Header";
import Footer from "./commponents/Footer"; 
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
          {/* <Routes>
            <Route path='/' Component={HomePage} exact/>
            <Route path='/product/:id' Component={ProductPage} />
          </Routes> */}
          <Outlet/>
        </Container>
      </main>
      <Footer/>
    </>

  );
}

export default App;
