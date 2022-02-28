import React from 'react';
import Header from '../../common/header/Header';
import MovieFilter from './MovieFilter';
import ReleasedMovies from './ReleasedMovies';
import UpcomingMovies from './UpcomingMovies';
import './Home.css'
import './ReleasedMovies.css'
import './MovieFilter.css'


export default function Home(){
    return(
        <div>
            <Header/>
            <UpcomingMovies/>
            <div className='released-movies-container'>
                <div className='released-movies'>
                <ReleasedMovies/>
                </div>
                <div className='movies-filter'>
                <MovieFilter/>
                </div>
            </div>
            
        </div>
    )
}