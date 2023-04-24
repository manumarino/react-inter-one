import React, {useState} from 'react';
import Button from '@mui/material/Button';


function Nuevo(props) {

    const [age, setAge] = useState(29);
    function birthday () {
        setAge(age + 1);
    }

  return (
    <div> {props.name} tiene:
    <div>
        {age}
    </div>
    <Button onClick={birthday} color='success' variant='text' >
      Cumplir años
    </Button>
     </div>
  )
};



export default Nuevo;