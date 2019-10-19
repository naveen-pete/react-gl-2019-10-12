import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';

const App = () => {
  return <div className="container">
    <Header />
    <Posts />
    <Footer />
  </div>;
};

export default App;
