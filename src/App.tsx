import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from './layouts/SharedLayout/SharedLayout';

const HomePage = lazy(()=>import("./pages/HomePage/HomePage"))
const AboutPage = lazy(()=> import("./pages/AboutPage/AboutPage"))
const CareersPage = lazy(() => import("./pages/CareersPage/CareersPage"))

function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/careers' element={<CareersPage/>}/>
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
