import React from "react"
// import { Navbar, NavItem, } from 'react-materialize'
import { Link } from "react-router-dom"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { red } from "@material-ui/core/colors";


const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
    'Health',
    'Style',
    
  ];

  const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid `,
     
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
      boxShaddoe: 'none'
      
    },
    toolbarLink: {
      padding: theme.spacing(5),
      flexShrink: 0,
    
      
    },
   
   
  }));
function Nav() {
    const classes = useStyles();

    return (

        // <Navbar brand={<a />} alignLinks="right" className="blue " sidenav={<li />}>


        //     <Link
        //         to="/myaccount"
        //         className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        //     >
        //         <NavItem href="">
        //             My Account
        //     </NavItem>

        //     </Link>
        //     <NavItem href="components.html">
        //         Saved Events
        // </NavItem>
        // </Navbar>
        <React.Fragment>
               <CssBaseline/>
        <Toolbar className={classes.toolbar}>
        <Button size="small">Account Log In</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
         Zefaruh
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className='white' >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section}
            variant="body2"
            href="#"
            className="{classes.toolbarLink}"
          >
            {section}
          </Link>
        ))}
      </Toolbar>
     
      </React.Fragment>

    )

}

export default Nav