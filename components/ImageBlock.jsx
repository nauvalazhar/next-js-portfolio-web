const imageDetails = {
  angular: {
    title: 'AngularJS',
    link: 'https://angularjs.org/'
  },
  js: {
    title: 'VanillaJS',
    link: 'http://vanilla-js.com/'
  },
  dfp: {
    title: 'Google DoubleClick for Publishers',
    link: 'https://admanager.google.com/home/'
  },
  firebase: {
    title: 'Google Firebase',
    link: 'https://firebase.google.com/'
  },
  jquery: {
    title: 'JQuery',
    link: 'https://jquery.com/'
  },
  bootstrap: {
    title: 'Bootstrap',
    link: 'https://getbootstrap.com/'
  },
  next: {
    title: 'NextJS',
    link: 'https://nextjs.org/'
  },
  node: {
    title: 'NodeJS',
    link: 'https://nodejs.org/'
  },
  nosql: {
    title: 'MongoDB (NoSQL)',
    link: 'https://www.mongodb.com/nosql-explained'
  },
  mysql: {
    title: 'MySQL (and Workbench)',
    link: 'https://www.mysql.com/'
  },
  react: {
    title: 'ReadtJS',
    link: 'https://reactjs.org/'
  },
  pbd: {
    title: 'Prebid.js',
    link: 'https://prebid.org/'
  },
  typescript: {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/'
  },
  express: {
    title: 'ExpressJS',
    link: 'https://expressjs.com/'
  },
  aws: {
    title: 'Amazon Web Servies (AWS)',
    link: 'https://aws.amazon.com/'
  },
  css: {
    title: 'CSS/SCSS',
    link: 'https://en.wikipedia.org/wiki/CSS'
  },
  html: {
    title: 'HTML/HTML5',
    link: 'https://en.wikipedia.org/wiki/HTML5'
  },
  shell: {
    title: 'Bash / Shell',
    link: 'https://www.gnu.org/software/bash/'
  },
  linux: {
    title: 'Linux/Ubuntu',
    link: 'https://ubuntu.com/'
  },
  vscode: {
    title: 'Visual Studio Code',
    link: 'https://code.visualstudio.com/'
  }
};

function ImageBlock({ src = '', alt = '', srcList = [] }) {
  const isImg = src && !src.match(/[^.]+\.svg/);
  let content = <div>Nada</div>;
  if (isImg) {
    content = <img src={src} alt={alt} />;
  }
  if (srcList.length) {
    const imageOrder = srcList
      .map((item) => {
        if (typeof item === 'string') {
          if (!imageDetails[item]) return '';
          return Object.assign({}, imageDetails[item], { imgSrc: `/${item}.png` });
        }
        return item;
      })
      .filter((item) => Boolean(item));
    content = (
      <div className="image-block-list">
        {imageOrder.map(({ title = '', link = '', imgSrc = '' }, index) => (
          <a key={`${title}_${index}`} className="image-block-item" href={link} target="blank">
            <img title={title} src={imgSrc} alt={title} />
          </a>
        ))}
      </div>
    );
  }
  return <div className="image-block-wrapper">{content}</div>;
}

export default ImageBlock;
