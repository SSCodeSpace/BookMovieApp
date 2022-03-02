import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';


const tileData = [
    
    {
      img: '../../assets/logo.svg',
      title: 'Tasty burger',
      author: 'director90',
      id:'1'
    },
    {
      img: '/static/images/grid-list/camera.jpg',
      title: 'Camera',
      author: 'Danson67',
      id:'2'
    },
    {
      img: '/static/images/grid-list/morning.jpg',
      title: 'Morning',
      author: 'fancycrave1',
      featured: true,
      id:'3'
    },
    {
      img: '/static/images/grid-list/hats.jpg',
      title: 'Hats',
      author: 'Hans',
      id:'4'
    },
    {
      img: '/static/images/grid-list/honey.jpg',
      title: 'Honey',
      author: 'fancycravel',
      id:'5'
    },
    {
      img: '/static/images/grid-list/vegetables.jpg',
      title: 'Vegetables',
      author: 'jill111',
      cols: 2,
      id:'6'
    },
    {
      img: '/static/images/grid-list/plant.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
      id:'7'
    },
    {
      img: '/static/images/grid-list/mushroom.jpg',
      title: 'Mushrooms',
      author: 'PublicDomainPictures',
      id:'8'
    },
    {
      img: '/static/images/grid-list/olive.jpg',
      title: 'Olive oil',
      author: 'congerdesign',
      id:'9'
    },
    {
      img: '/static/images/grid-list/star.jpg',
      title: 'Sea star',
      cols: 2,
      author: '821292',
      id:'10'
    },
    {
      img: '/static/images/grid-list/bike.jpg',
      title: 'Bike',
      author: 'danfador',
      id:'11'
    },
  ];
  



const styles = theme => ({
  /*root: {
   
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    
  },*/
  
  /*title: {
    color: theme.palette.white,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },*/
  
});

function ReleasedMovies(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4} cellHeight="340px">
        {tileData.map(tile => (
        <Link to={`/movie/${tile.id}`}>
          <GridListTile key={tile.id} >
            
            <img src={logo} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                
                title: classes.title,
              }}
            />
          </GridListTile>
          </Link>
        ))}
      </GridList>
    </div>
  );
}

ReleasedMovies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReleasedMovies);