import Link from 'next/link';
import { withRouter } from 'next/router';

const NESTED_ACTIVE_CLASS = 'nested-active';

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    {
      text: 'Experience',
      href: '/experience',
      items: [
        { text: 'AdBridg', href: '/experience/adb' },
        { text: 'Fizzz Design Inc', href: '/experience/fizzz_inc' }
      ]
    }
  ];

  const isPath = (href, items = []) =>
    router.pathname === href ||
    (items.some((item) => router.pathname === item.href) && NESTED_ACTIVE_CLASS);

  const getLink = ({ href, text, items }) => {
    const activeItem = isPath(href, items);
    const activeClass = activeItem ? 'active' : '';
    const nestedActiveClass = activeItem === NESTED_ACTIVE_CLASS ? NESTED_ACTIVE_CLASS : '';

    return (
      <Link href={href}>
        <a className={`nav-item ${activeClass} ${nestedActiveClass}`}>{text}</a>
      </Link>
    );
  };

  const renderNested = ({ items = [] }) => {
    if (!(items && items.length)) return '';
    return (
      <div className="nested-nav">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{getLink(item)}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">
          <a className="logo upper-camel">
            <span>K</span>hadem<span> A</span>.<span>A</span>
          </a>
        </Link>

        <ul className="nav-links">
          {navs.map((nav, index) => (
            <li key={index}>
              <>{getLink(nav)}</>
              <>{renderNested(nav)}</>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
