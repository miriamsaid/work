import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Main from './components/main';
import Work from './components/work';
import Footer from './components/footer';

function App() {
  return (
    <Fragment>
      <Main />
      <Work />
      <Footer />
    </Fragment>
  );
}

export default App;
