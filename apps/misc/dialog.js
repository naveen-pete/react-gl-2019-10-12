<Fragment>
  <Fab size="small" onClick={this.handleToggle}>
    <AddIcon />
  </Fab>
  <Dialog
    open={open}
    onClose={this.handleToggle}
  >
    <DialogTitle id="form-dialog-title">
      Create a New Exercise
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Please fill out the form below.
      </DialogContentText>

      {/* Form comes here */}

    </DialogContent>
  </Dialog>
</Fragment>