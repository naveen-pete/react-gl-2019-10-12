// const styles = {
//   formControl: {
//     width: 250
//   }
// };

<form>
  <TextField
    label="Title"
    margin="normal"
    style={styles.formControl}
  />
  <br />
  <FormControl style={styles.formControl}>
    <InputLabel htmlFor="muscles">Muscles</InputLabel>
    <Select>
      <MenuItem value="shoulders">
        Shoulders
      </MenuItem>
    </Select>
  </FormControl>
  <br />
  <TextField
    label="Description"
    multiline
    rows="4"
    margin="normal"
    style={styles.formControl}
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
