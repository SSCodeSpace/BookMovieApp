import React from 'react';
import Header from '../../common/header/Header';
import MovieFilter from './MovieFilter';
import ReleasedMovies from './ReleasedMovies';
import UpcomingMovies from './UpcomingMovies';
import './Home.css'
import './ReleasedMovies.css'
import './MovieFilter.css'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'


export default function Home(props){
   
    const dispatchURL = useDispatch();
    dispatchURL({"type":"LOAD_HOME","payload":props.baseUrl});

    return(
        <div>
            
            <Header {...props}/>
            <UpcomingMovies/>
            <div className='released-movies-container'>
                <div className='released-movies'>
                <ReleasedMovies {...props}/>
                </div>
                <div className='movies-filter'>
                <MovieFilter/>
                </div>
            </div>
            
        </div>
    )
}