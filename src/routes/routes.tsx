import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitialLoader from '../components/InitialLoader/initialoader';
import ProductDetails from '../components/ProductDetailPage/productDetailpage';
const HomePageComponent = React.lazy(() => import('../pages/HomePage/homepage'));

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<InitialLoader />}>
              <HomePageComponent />
          </Suspense>
        } 
          />
        <Route path="/home" element={
          <Suspense fallback={<InitialLoader />}>
            <HomePageComponent />
          </Suspense>
        }
        />

        <Route path="/product/:id" element={
          <Suspense fallback={<InitialLoader />}>
            <ProductDetails />
          </Suspense>
        }
        />
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
