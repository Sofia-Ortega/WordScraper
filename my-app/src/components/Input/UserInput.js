import React from 'react';
import Language from './Language';
import FileType from './FileType';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const btnStyle = {
  padding: '10px',
}




export default function UserInput() {
  const [language, setLanguage] = React.useState('');
  const handleChange = (event) => {
    //console.log(event.target.value)
    setLanguage(event.target.value);
  }

  const getData = () => {
    console.log(language);
  }

  return(
    <div>
     <Language handleChange={handleChange} language={language}/>
     <FileType/>
     <div style={btnStyle}>
       <Button
         variant="contained"
         color="primary"
         onClick={() => {getData()}}
       >
         Go!
       </Button>
     </div>
    </div>
  )
}

