import {Route, Routes} from 'react-router-dom';
import { Fragment } from 'react';
import Product from "./components/Product";
import ProductDetails from './components/ProductDetails';

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/:id' element={<ProductDetails/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
