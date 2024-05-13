import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import Catalog from '../../pages/catalog/catalog';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Product from '../../pages/product/product';

function App(): JSX.Element {

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Catalog />} />
            <Route path={`${AppRoute.Product}/:id`} element={<Product />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
