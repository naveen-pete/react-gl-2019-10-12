import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return <AppBar position="relative" color="primary">
    <Toolbar>
      <Typography variant="h6">
        Exercises App
      </Typography>
    </Toolbar>
  </AppBar>;
}

export default Header;
