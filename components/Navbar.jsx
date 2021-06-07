import Link from 'next/link';
import { withRouter } from 'next/router';

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    {
      text: 'Experience',
      href: '/experience/',
      items: [{ text: 'Fizzz Design Corp', href: '/experience/fizz_inc' }]
    },
    { text: 'Contact', href: '/contact' }
    // { text: '', href: '' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">
          <a className="logo upper-camel">
            <span>K</span>hadem<span>A</span>.<span>A</span>.
          </a>
        </Link>

        <ul className="nav-links">
          {navs.map((nav) => (
            <li>
              <Link href={nav.href}>
                <a className={`nav-item ${router.pathname == nav.href ? 'active' : ''}`}>
                  {nav.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
