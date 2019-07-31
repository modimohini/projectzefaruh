
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));




function ResultCard( {expanded, handleExpandClick, locationName, title, dates, image, note, tickets, locationAddress, locationCity, locationPostalCode, locationState, locationDistance, locationDistanceUnits  } ){
  const classes = useStyles();

  

    return(

//   <div> 

//   <h2 className="header">{props.title} at the {props.locationName}</h2>
//   <h6> Distance: {props.locationDistance}{props.locationDistanceUnits}</h6>

//   <div className="card horizontal">
//     <div className="card-image">
//       <img src={props.image} alt="event"/>
//     </div>
//     <div className="card-stacked">
//       <div className="card-content">
//         <p>{props.note}</p>
//         <p>{props.dates}</p>
//         <p>Venue Address {props.locationAddress} {props.locationCity} {props.locationPostalCode} {props.locationState} </p>

//       </div>
//       <div className="card-action">
//         <a href={props.tickets} target="_blank" rel="noopener noreferrer" >Purchase Tickets</a>
      

//       </div>
//     </div>
//   </div>
// </div>
  
<Card className={classes.card}>
<CardHeader
  avatar={
    <Avatar aria-label="recipe" className={classes.avatar}>
      R
    </Avatar>
  }
  action={
    <FavoriteIcon/>
  }
  title={title}
  subheader={locationName} 
  
/>
<CardMedia
  className={classes.media}
  image={image}
  // title={title}
/>
<CardContent>
  <Typography variant="body2" color="textSecondary" component="p">
    {dates}
  
  </Typography>
</CardContent>
<CardActions >
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
  <IconButton
    className={clsx(classes.expand, {
      [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </IconButton>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
    <Typography paragraph>Method:</Typography>
    <Typography paragraph>
     {note}
    </Typography>
    {/* <Typography paragraph>
      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
      heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
      browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
      and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
      pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
    </Typography>
     */}
    <Typography>
      Set aside off of the heat to let rest for 10 minutes, and then serve.
    </Typography>
  </CardContent>
</Collapse>
</Card>


    )

}
export default ResultCard


