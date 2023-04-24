import { Slider } from '@mui/material';

function SliderComponent(props) {
  return (
    <Slider
      sx={{ width: '20%' }}
      value={props.value}
      onChange={props.onChange}
      min={props.min}
      max={props.max}
      step={props.step}
    />
  );
}

export default SliderComponent;