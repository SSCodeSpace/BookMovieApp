import React, { useState } from 'react';
import { Button, CardContent, FormControl, Card } from '@material-ui/core';
import { InputLabel } from '@material-ui/core'
import { Input } from '@material-ui/core'
import '../../common/header/Form.css'
import { MenuItem, ListItemText, Select, Checkbox } from '@material-ui/core';
import './MovieFilter.css'
import { withStyles } from '@material-ui/core/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
        
    },
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      getContentAnchorEl: null
    
};

const styles=  theme => ({
    h4:{
        color:theme.palette.primary.light,
        margin:theme.spacing.unit
    },
    root:{
        margin:theme.spacing.unit
    }
})

function MovieFilter(props) {
    const{classes}=props;

    const [filters, setFilters] = useState({ movieName: '', genreSelector: {}, artistSelector: {}, releaseStartDate: '', releaseEndDate: '' });
    const [genres, setGenres] = useState([]);
    const [artists, setArtists] = useState([]);

    const genresTestData = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFilters(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(filters);
    }


    const handleGenreChange = (e) => {
        const {
            target: { value },
        } = e;
        setGenres(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    const handleArtistChange = (e) => {
        const {
            target: { value },
        } = e;
        setArtists(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    return (
        //<div className='movies-filter-container'>
        <Card >
            <CardContent style={{paddingBottom:0}}>
            <h4 className={classes.h4}>FIND MOVIES BY:</h4>
            </CardContent>
            <form onSubmit={handleSubmit} >
                <CardContent className={`movie-filter-card-content ${classes.root}`} style={{paddingTop:0}}>
                    <FormControl  fullWidth>
                        <InputLabel htmlFor="movieName" required>Movie Name</InputLabel>
                        <Input id="movieName" variant="standard" value={filters.movieName} name='movieName' onChange={handleChange} />
                    </FormControl>
                </CardContent>
                <CardContent className={`movie-filter-card-content ${classes.root}`}>
                    <FormControl fullWidth >
                        <InputLabel htmlFor="genres" required>Genres</InputLabel>
                        <Select id="genres" variant="standard" multiple value={genres}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                            onChange={handleGenreChange}
                            name="genreSelector"
                        >
                            {genresTestData.map((genre) => (
                                <MenuItem key={genre} value={genre}>
                                    <Checkbox checked={genres.indexOf(genre) > -1} />
                                    <ListItemText primary={genre} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </CardContent>
                <CardContent  className={`movie-filter-card-content ${classes.root}`}>
                    <FormControl fullWidth >
                        <InputLabel htmlFor="artists" required>Artists</InputLabel>
                        <Select id="artists" variant="standard" multiple value={artists}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                            onChange={handleArtistChange}
                            name="artistSelector"
                        >
                            {genresTestData.map((genre) => (
                                <MenuItem key={genre} value={genre}>
                                    <Checkbox checked={artists.indexOf(genre) > -1} />
                                    <ListItemText primary={genre} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </CardContent>
                <CardContent  className={`movie-filter-card-content ${classes.root}`}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="releaseStartDate" required shrink={true} >Release Date Start</InputLabel>
                        <Input id="releaseStartDate" variant="standard" type='date' name='releaseStartDate' onChange={handleChange} />
                    </FormControl>
                </CardContent>
                <CardContent  className={`movie-filter-card-content ${classes.root}`}>
                    <FormControl fullWidth >
                        <InputLabel htmlFor="releaseEndDate" required shrink={true} >Release Date End</InputLabel>
                        <Input id="releaseEndDate" variant="standard" type='date' name='releaseEndDate' onChange={handleChange} />
                    </FormControl>
                </CardContent>
                <CardContent  className={`movie-filter-card-content ${classes.root}`}>

                    <Button variant='contained' color='primary' fullWidth type='submit'>APPLY</Button>
                </CardContent>
            </form>

        </Card>
        // </div>
    );
}
export default withStyles(styles)(MovieFilter);