import { Button, ButtonGroup, TextField } from '@mui/material';
import React, { useState } from 'react';

const SizeControl = ({ size, onChange, originalSize }) => {
  const [percentage, setPercentage] = useState('');

  const handleButtonClick = (newPercentage) => {
    const newImageSize = Math.round((newPercentage / 100) * originalSize);
    onChange(null, newImageSize);
    setPercentage(newPercentage);
  };

  const handleInputChange = (event) => {
    const newPercentage = event.target.value;
    setPercentage(newPercentage);
    const newImageSize = Math.round((newPercentage / 100) * originalSize);
    onChange(null, newImageSize);
  };

  return (
    <div>
        

        <ButtonGroup>
        <TextField label="Porcentaje" type="number" value={percentage} InputProps={{ inputProps: { min: 0, max: 100 } }} onChange={handleInputChange} />
            <Button onClick={() => handleButtonClick(100)}>100%</Button>
            <Button onClick={() => handleButtonClick(75)}>75%</Button>
            <Button onClick={() => handleButtonClick(50)}>50%</Button>
            <Button onClick={() => handleButtonClick(25)}>25%</Button>
        </ButtonGroup>
    </div>
  );
};

export default SizeControl;
