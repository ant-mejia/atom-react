import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="container page-section">
          <div className="footer-logo">
            <a href="#top"><img src="img/a-transparent.png" width="85" alt=""/></a>
          </div>
          <div className="social-media">
            <a href="#" title="Google Plus" target="_blank">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="https://github.com/ant-mejia" title="Github" target="_blank">
              <i className="fa fa-github-alt"></i>
            </a>
            <a href="#" title="Twitter" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" title="Instagram" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="footer-text">
            <div className="copyright cap">
              <a className="text" href="index.html" target="_blank">&copy; Atom 2016</a>
            </div>
            <div className="print">
              Made by the best.
            </div>
          </div>
        </div>
        <a href="#top" className="top-arrow">
          <span className="lnr lnr-chevron-up"></span>
        </a>
      </footer>
    );
  }

}

export default Footer;
