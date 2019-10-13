import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';

const styles = {
  paper: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    height: 500,
    overflowY: 'auto'
  },
  category: {
    textTransform: 'capitalize'
  },
  subtitle: {
    marginTop: 20
  }
};

const Exercises = ({ exercises, onExerciseSelect, exercise, category }) => {
  const {
    title = 'Welcome!',
    description = 'Please select an exercise.'
  } = exercise;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Paper style={styles.paper}>
          {exercises.map(([cat, exercises]) => {
            let ui = null;
            if (!category || category === cat) {
              ui = <Fragment key={cat}>
                <Typography
                  variant="h5"
                  style={styles.category}
                >
                  {cat}
                </Typography>
                <List component="ul">
                  {exercises.map((ex) =>
                    <ListItem
                      button
                      key={ex.id}
                      onClick={() => onExerciseSelect(ex)}
                    >
                      <ListItemText primary={ex.title} />
                    </ListItem>
                  )}
                </List>
              </Fragment>;
            }
            return ui;
          })}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper style={styles.paper}>
          <Fragment>
            <Typography variant="h4">
              {title}
            </Typography>
            <Typography variant="subtitle2" style={styles.subtitle}>
              {description}
            </Typography>
          </Fragment>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Exercises;
