import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './css/Footer.css';

class Footer extends Component {
  static propTypes={
      copyright:PropTypes.string
  };
  render() {
    const {copyright = "&copy; 2019"}=this.props;
      return(
    <div className="Footer">
      <footer className="footer">
        <p> {copyright} </p>
      </footer>
    </div>
      );
  };
}

export default Footer;
