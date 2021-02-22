import React from 'react';
import classes from './styles.module.css';

const MovieCard = (props) => {
    return(
        <div className={classes.Card}>
            <img src={props.cover} alt="Titanic (filme de 1997)" />
            <div>
                <h2>{props.title}</h2>
                <p><label>Ano:</label> {props.release}</p>
                <p><label>Tipo:</label> {props.type}</p>
            </div>
        </div>
    );
}

export default MovieCard;
