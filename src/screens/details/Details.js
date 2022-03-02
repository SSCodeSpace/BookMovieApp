import { Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import Header from '../../common/header/Header';
import './Details.css';
import logo from '../../assets/logo.svg'
import YouTube from 'react-youtube';
import { StarBorder } from '@material-ui/icons';
import { GridList,GridListTile} from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';
import { Link } from 'react-router-dom';


const tileData = [
    {
      img: {logo},
      title: 'Breakfast',
      author: 'jill111',
      cols: 2,
      featured: true,
    },
    {
      img: '../../assets/logo.svg',
      title: 'Tasty burger',
      author: 'director90',
    },]


const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady=(e)=> {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  }

export default function Details(){
   
    return(
        <Fragment>
            <Header showBookShow={true}/>
            <div className='back-button'>
                <Link to='/'style={{textDecoration:'none'}}>
            <Typography variant='button'  >
                &lt; Back to Home
                </Typography>
                </Link>
                </div>
        <div className='details-container'>
            <div className='details-left'>
                <img src={logo} style={{height:"200px",width:"200px"}}/>
            </div>
            <div className='details-middle'>
                <Typography variant='headline' component='h2' >
                Inception
                </Typography>
                <Typography variant='body1'>
                <span className='movie-detail-label'>Genre: </span>Action, Adventure, Sci-fi 
                </Typography>
                <Typography variant='body1'>
                <span className='movie-detail-label'>Duration: </span>148 
                </Typography>
                <Typography variant='body1'>
                <span className='movie-detail-label'>Release Date: </span>Fri Jul 16 2010 
                </Typography>
                <Typography variant='body1'>
                <span className='movie-detail-label'>Rating: </span>8.8
                </Typography>
                
                <Typography variant='body1' >
                <span className='movie-detail-label'>Plot: </span> <a href='www.google.com'>(Wiki URL)</a>
                </Typography>
                <Typography variant='body1' >
                <span className='movie-detail-label'>Trailer: </span>
                </Typography>
                <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />;
                
            </div>
            <div className='details-right'>
                <Typography variant='body1' style={{height:"24px"}}>
                <span className='movie-detail-label'>Rate this movie:</span>
                </Typography>
                <StarBorder>

                </StarBorder>
                <StarBorder>
                    
                </StarBorder>
                <StarBorder>
                    
                </StarBorder>
                <StarBorder>
                    
                </StarBorder>
                <StarBorder>
                    
                </StarBorder>
                <Typography variant='body1'>
                <span className='movie-detail-label'>Artists: </span>
                </Typography>
                <GridList cols={2}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} >
            <img src={logo} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              
            />
          </GridListTile>
        ))}
      </GridList>
            </div>

        </div>
        </Fragment>
    )
}