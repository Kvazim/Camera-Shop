import { Outlet, useLocation } from 'react-router-dom';
import Banner from '../banner/banner';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Footer from '../footer/footer';
import Header from '../header/header';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { AppRoute } from '../../const';
import ModalCall from '../modal-call/modal-call';

function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="wrapper">
      <Header />
      <main>
        {pathname === AppRoute.Root && <Banner />}
        <div className="page-content">
          <Breadcrumbs />
          <ScrollToTop />
          <Outlet />
        </div>
        <ModalCall />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
