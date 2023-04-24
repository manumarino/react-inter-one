import { Box, styled } from '@mui/material';
import React from 'react';
import Score from './Score';
import StartScreen from './StartScreen';
import Ground from './Ground';
import DinoStationary from './DinoStationary';


const RenderDino = styled(Box)(({ theme }) => ({
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100px"
  }));

function World() {

  return (
    <RenderDino>
        <Score/>
        <StartScreen/>
        <Ground/>
        <Ground/>
        <DinoStationary/>
    </RenderDino>
  )
}

export default World