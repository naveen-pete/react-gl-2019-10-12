const exercises = [
  {
    id: 'overhead-press',
    title: 'Overhead Press',
    description: 'Delts exercise...',
    muscles: 'shoulders'
  },
  {
    id: 'dips',
    title: 'Dips',
    description: 'Triceps exercise...',
    muscles: 'arms'
  },
  {
    id: 'barbell-curls',
    title: 'Barbell Curls',
    description: 'Biceps exercise...',
    muscles: 'arms'
  },
  {
    'id': 'bench-press',
    title: 'Bench Press',
    description: 'Chest exercise...',
    muscles: 'chest'
  },
  {
    id: 'pull-ups',
    title: 'Pull Ups',
    description: 'Back and biceps exercise...',
    muscles: 'back'
  },
  {
    id: 'deadlifts',
    title: 'Deadlifts',
    description: 'Back and leg exercise...',
    muscles: 'back'
  },
  {
    id: 'squats',
    title: 'Squats',
    description: 'Legs exercise...',
    muscles: 'legs'
  },
];

// const exercisesByCategory = {
//   shoulders: [
//     {
//       id: 'overhead-press',
//       title: 'Overhead Press',
//       description: 'Delts exercise...',
//       muscles: 'shoulders'
//     }
//   ],
//   arms: [
//     {
//       id: 'dips',
//       title: 'Dips',
//       description: 'Triceps exercise...',
//       muscles: 'arms'
//     },
//     {
//       id: 'barbell-curls',
//       title: 'Barbell Curls',
//       description: 'Biceps exercise...',
//       muscles: 'arms'
//     }
//   ],
//   chest: [],
//   back: [],
//   legs: []
// };

const exercisesByCategory = exercises.reduce((acc, ex) => {
  const { muscles } = ex;
  acc[muscles] = acc[muscles] ? [...acc[muscles], ex] : [ex];
  return acc;

}, {});

// console.log('exercises:', exercises);
// console.log('exercises by cat:', exercisesByCategory);

const arrExercises = Object.entries(exercisesByCategory);
// console.log(arrExercises);

arrExercises.map(([cat, exercises]) => {
  console.log('category:', cat);
  console.log('    exercises:', exercises);
});
