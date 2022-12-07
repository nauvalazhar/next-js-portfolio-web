import Link from 'next/link';
import { withRouter } from 'next/router';

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/', dataCy: 'homePageLink' },
    { text: 'About', href: '/about', dataCy: 'aboutPageLink' },
    { text: 'Portfolio', href: '/portfolio', dataCy: 'portfolioPageLink' },
    { text: 'Contact', href: '/contact', dataCy: 'contactPageLink' },
    // { text: '', href: '' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          Lutfhi.
        </Link>

        <ul className="nav-links">
          {navs.map((nav) => (
            <li data-cy={nav.dataCy} key={nav.href}>
              <Link
                href={nav.href}
                className={`nav-item ${
                  router.pathname === String(nav.href) ? 'active' : ''
                }`}
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
