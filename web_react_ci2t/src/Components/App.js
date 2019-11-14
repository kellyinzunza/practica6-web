//dependencies
import React, { Component } from 'react'; // add Component
import PropTypes from 'prop-types';

//components
//import './Global/css/App.css'; // no lo necesita
import Header from './Global/Header';
import Footer from './Global/Footer';
//import Content from './Global/Content';
import Form from './Global/Form';

//data
import items from '../data/menu';



class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header title="CI2T 2020" items={items} />

        <Form body={children} />
        <Footer copyright=" &copy; CI2T 2020" />
      </div>
    );
  };
}

export default App;
