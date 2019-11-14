//dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'; // validacion de propiedades
import { Link } from 'react-router-dom';
//assets
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const { title, items } = this.props;
    return (
      <div className="Header">
        <header className="logo">

          <h2> {title} </h2>
          <ul className="Menu">
            {items.map((item, key) => <li key={key}> <Link to={item.url}> {item.title}</Link></li>)}
          </ul>
        </header>
      </div>
    );

  };
}

export default Header;
