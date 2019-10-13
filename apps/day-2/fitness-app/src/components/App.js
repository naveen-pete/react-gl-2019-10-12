import React, { Component } from 'react';
import Header from './Header';
import Exercises from './Exercises';
import Footer from './Footer';
import { categories, exercises } from '../store';

class App extends Component {
  state = {
    categories,
    exercises
  }

  getExercisesByCategory = () => {
    const { exercises } = this.state;

    return Object.entries(exercises.reduce((acc, e) => {
      const { muscles } = e;
      acc[muscles] = acc[muscles] ? [...acc[muscles], e] : [e];
      return acc;
    }, {}));
  }

  render() {
    const { categories } = this.state;
    const exercises = this.getExercisesByCategory();

    return (
      <div>
        <Header />
        <Exercises exercises={exercises} />
        <Footer categories={categories} />
      </div>
    );
  }
}

export default App;
