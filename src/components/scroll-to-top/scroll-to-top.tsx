import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Numbers } from '../../const';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(Numbers.Zero, Numbers.Zero);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
