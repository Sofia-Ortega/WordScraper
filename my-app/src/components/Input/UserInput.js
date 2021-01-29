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
  const [fileType, setFileType] = React.useState('');

  const onLangChange = (e) => {
    //console.log(event.target.value)
    setLanguage(e.target.value);
  }

  const onFileChange = (e) => {
    setFileType(e.target.value);
  }

  const getData = () => {
    console.log(language, fileType);
  }

  return(
    <div>
     <Language onLangChange={onLangChange} language={language}/>
     <FileType onFileChange={onFileChange} fileType={fileType}/>
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

