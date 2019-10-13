import React, { Component } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';

const styles = {
  formControl: {
    width: 250
  }
};

class Form extends Component {
  state = {
    title: 'Ex 101',
    muscles: 'arms',
    description: 'Ex 101 desc'
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    });

  render() {
    const { categories } = this.props;
    const { title, description, muscles } = this.state;

    return (
      <form>
        <TextField
          label="Title"
          margin="normal"
          value={title}
          style={styles.formControl}
          onChange={this.handleChange('title')}
        />
        <br />
        <FormControl style={styles.formControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          >
            {categories.map(c => {
              return <MenuItem key={c} value={c}>
                {c}
              </MenuItem>;
            })}
          </Select>
        </FormControl>
        <br />
        <TextField
          label="Description"
          multiline
          rows="4"
          margin="normal"
          style={styles.formControl}
          value={description}
          onChange={this.handleChange('description')}
        />
        <br />
        <Button
          color="primary"
          variant="contained"
          size="small"
        >
          Create
        </Button>
      </form>
    );
  }
}

export default Form;
