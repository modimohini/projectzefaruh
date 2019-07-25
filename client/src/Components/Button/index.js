import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(10),
    padding: theme.spacing(0,4)
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function SearcButton() {
  const classes = useStyles();

  return (
    
      <div>
        
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <Search className={classes.extendedIcon} />
          Search
        </Fab>
      </div>
      
   
  );
}