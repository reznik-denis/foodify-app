import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Container } from 'Components/Container';
import { AppBar } from 'Components/AppBar';
import { Loader } from 'Components/Loader'

const Main = lazy(() => import('./views/Main.js' /* webpackChunkName: "main-view" */));
const Favourites = lazy(() => import('./views/Favourites.js' /* webpackChunkName: "weatherForecast-view" */));
const NoFoundPage = lazy(() => import('./views/NoFoundPage.js' /* webpackChunkName: "noFoundPage-view" */))

function App() {
  return (
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
  );
}

export default App;
