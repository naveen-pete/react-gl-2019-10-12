import React, { Fragment } from 'react';
import { Grid, Paper, List, ListItem, ListItemText, Typography } from '@material-ui/core';

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
