import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const categories = [
  {
    value: 'dining',
    label: 'dining',
  },
  {
    value: 'music',
    label: 'music',
  },
  {
    value: 'arts & entertainment',
    label: 'arts & entertainment',
  },
  {
    value: 'ooutdoor activities',
    label: 'outdoor activites',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    // name: 'HarryPotter',
    // age: '',
    // multiline: 'Controlled',
    Category: 'whoa',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      
      <TextField
        id="outlined-select-category"
        select
        label="Select"
        className={classes.textField}
        value={values.Category}
        onChange={handleChange('Category')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your Category"
        margin="normal"
        variant="outlined"
      >
        {categories.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {/* <TextField
        id="outlined-select-Category-native"
        select
        label="Native select"
        
        className={classes.textField}
        value={values.Category}
        onChange={handleChange('Category')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your Category"
        margin="normal"
        variant="outlined"
      >
        {categories.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        id="outlined-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-bare"
        className={classes.textField}
        defaultValue="Bare"
        margin="normal"
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
      /> */}
    </form>
  );
}