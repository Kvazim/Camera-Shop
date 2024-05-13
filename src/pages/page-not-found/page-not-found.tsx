import './style.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function PageNotFound(): JSX.Element {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Oops! Page not found.</h2>
      <p>We&nbsp;can&rsquo;t find the page you&rsquo;re looking for.</p>
      <Link to={AppRoute.Root}>Go back home</Link>
    </div>
  );
}

export default PageNotFound;
