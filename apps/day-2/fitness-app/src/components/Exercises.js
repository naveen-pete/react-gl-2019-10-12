import React, { Fragment } from 'react';
import { Grid, Paper, List, ListItem, ListItemText, Typography } from '@material-ui/core';

const styles = {
  paper: {
    padding: 20,
    marginTop: 3,
    marginBottom: 3,
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

const Exercises = ({ exercises }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper>
          {exercises.map(([cat, exercises]) => {
            return (
              <Fragment key={cat}>
                <Typography
                  variant="h6"
                >
                  {cat}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) =>
                    <ListItem
                      button
                      key={id}
                    >
                      <ListItemText primary={title} />
                    </ListItem>
                  )}
                </List>
              </Fragment>
            );
          })}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>
          Right Panel
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Exercises;
