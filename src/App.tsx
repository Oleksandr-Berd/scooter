import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from './layouts/SharedLayout/SharedLayout';
import AboutPage from './pages/AboutPage/AboutPage';

const HomePage = lazy(()=>import("./pages/HomePage/HomePage"))

function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
