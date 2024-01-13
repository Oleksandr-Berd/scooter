import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from './layouts/SharedLayout/SharedLayout';
import NotFound from './pages/NotFound/NotFound';

const HomePage = lazy(()=>import("./pages/HomePage/HomePage"))
const AboutPage = lazy(()=> import("./pages/AboutPage/AboutPage"))
const CareersPage = lazy(() => import("./pages/CareersPage/CareersPage"))
const LocationPage = lazy(()=> import("./pages/LocationPage/LocationPage"))

function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/careers' element={<CareersPage/>}/>
          <Route path='/location' element={<LocationPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
