import React, { Component } from 'react';
import Header from './Header';
import Exercises from './Exercises';
import Footer from './Footer';
import { categories, exercises } from '../store';

class App extends Component {
  state = {
    categories,
    exercises,
    exercise: {},
    category: ''
  }

  getExercisesByCategory = () => {
    const { exercises } = this.state;

    return Object.entries(exercises.reduce((acc, e) => {
      const { muscles } = e;
      acc[muscles] = acc[muscles] ? [...acc[muscles], e] : [e];
      return acc;
    }, {}));
  }

  handleExerciseSelect = (exercise) => {
    this.setState({
      exercise
    });
  }

  handleCategorySelect = (category) => {
    this.setState({
      category
    });
  }

  render() {
    const { categories, exercise, category } = this.state;
    const exercises = this.getExercisesByCategory();

    return (
      <div>
        <Header categories={categories} />
        <Exercises
          exercises={exercises}
          onExerciseSelect={this.handleExerciseSelect}
          exercise={exercise}
          category={category}
        />
        <Footer
          categories={categories}
          onCategorySelect={this.handleCategorySelect}
          category={category}
        />
      </div>
    );
  }
}

export default App;
