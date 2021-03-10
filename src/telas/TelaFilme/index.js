import React from 'react';
import classes from './filme.module.css';


const Filme = () => {
    return (
        <>
        <body className={classes.body}>
        <h1 className={classes.titulo}>Overwatch O filme</h1>
        <div className={classes.conteudo}>
            <h6 className={classes.palavras}>Ano: 2019</h6>
            <h6 className={classes.palavras}>Duração: 1:23:39</h6>
            <h6 className={classes.palavras}>Avaliação: 4.2</h6>

        </div>
        </body>
    </>

    );
};

export default Filme;