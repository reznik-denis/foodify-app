import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { Container } from 'Components/Container';
import { AppBar } from 'Components/AppBar';
import { Loader } from 'Components/Loader'
import { operation } from './redux';

const Main = lazy(() => import('./views/Main.js' /* webpackChunkName: "main-view" */));
const Favourites = lazy(() => import('./views/Favourites.js' /* webpackChunkName: "weatherForecast-view" */));
const NoFoundPage = lazy(() => import('./views/NoFoundPage.js' /* webpackChunkName: "noFoundPage-view" */))

function App() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.random())
  }, [dispatch]);
  
  return (<>
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={
              <Suspense fallback={<Loader />}>
                <Main/>
              </Suspense>}/>
          <Route path="/favourites" element={
              <Suspense fallback={<Loader />}>
                <Favourites/>
              </Suspense>} />
          <Route path="*" element={
              <Suspense fallback={<Loader />}>
                <NoFoundPage/>
              </Suspense>}/>
        </Route>
    </Routes>
    </Container>
    <ToastContainer
            position="bottom-right"
            autoClose={3000}
          /></>
  );
}

export default App;
