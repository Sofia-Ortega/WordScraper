import React from 'react';
import Language from './Language';
import FileType from './FileType';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const btnStyle = {
  padding: '10px',
}


export default function UserInput({handleChange}) {
  return(
    <div>
     <Language handleChange={handleChange}/>
     <FileType/>
     <div style={btnStyle}>
       <Button
         variant="contained"
         color="primary"
         onClick={() => {console.log('that tickles')}}
       >
         Go!
       </Button>
     </div>
    </div>
  )
}

