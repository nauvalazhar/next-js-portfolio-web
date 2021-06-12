import ImageBlock from './ImageBlock';

const items = [
  {
    title: 'Mail me',
    imgSrc: 'https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png',
    link: 'mailto:khadem.avinoor@gmail.com'
  },
  {
    title: 'Github Page',
    imgSrc: '/github.png',
    link: 'https://github.com/DemonFangs'
  },
  {
    title: 'LinkedIn Page',
    imgSrc:
      'https://www.seekpng.com/png/full/154-1546943_jpg-transparent-stock-linkedin-logo-svg-png-icon.png',
    link: 'https://www.linkedin.com/in/khadem-avinoor-alam/'
  }
];

function Footer() {
  return (
    <div className="footer-wrapper">
      <ImageBlock srcList={items} />
    </div>
  );
}

export default Footer;
