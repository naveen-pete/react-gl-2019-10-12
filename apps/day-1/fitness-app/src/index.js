import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {
  return <div>
    <h1> Fitness App</h1>
    <p>My first React application</p>
    <ul>
      <li>React</li>
      <li>Redux</li>
    </ul>
  </div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
