import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AppRoute, Status } from '../../const';
import Layout from '../layout/layout';
import Catalog from '../../pages/catalog/catalog';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Product from '../../pages/product/product';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { getGoodsLoadingStatus } from '../../store/goods-process/goods-process.selector';
import { getPromoLoadingStatus } from '../../store/promo-process/promo-process.selectors';
import ErrorLoadSreen from '../error-load-screen/error-load-screen';
import { fetchGoodsAction } from '../../store/api-actions';

function App(): JSX.Element {
  const isGoodsLoadingStatus = useAppSelector(getGoodsLoadingStatus);
  const isPromoLoadingStatus = useAppSelector(getPromoLoadingStatus);

  if (isGoodsLoadingStatus === Status.Loading || isPromoLoadingStatus === Status.Loading) {
    return (
      <LoadingScreen />
    );
  }

  if (isGoodsLoadingStatus === Status.Failed) {
    return (
      <ErrorLoadSreen onButtonDispatchClick={fetchGoodsAction} />
    );
  }

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
