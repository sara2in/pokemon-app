import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PokemonCard from './PokemonCard';

export default function HistoryBox(props) {

  let recentArray = [];
  for(let i = 1; i < 6; ++i){
      if(props.searchHistory[i]){
        recentArray.push(<PokemonCard
          pokeData={props.searchHistory[i]}
          changePokemon= {props.changePokemon}     
          />)
      }
  }


  return (
    <Box  sx={{height: '15%' ,margin: '25px', display: 'inline-flex' ,backgroundColor:'yellow'  }}>
        {recentArray}
    </Box>
  );

}