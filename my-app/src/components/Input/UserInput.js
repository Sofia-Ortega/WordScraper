import React from 'react';
import Language from './Language';
import FileType from './FileType';
import Button from '@material-ui/core/Button';


const btnStyle = {
  padding: '10px',
}
const center = {
  // marginLeft: '12.5vw',
  margin: 'auto',
  width: '50%',
  border: '3px solid green',
  padding: '10px'
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
    <div style={center}>
     <Language onLangChange={onLangChange} language={language}/>
     <FileType onFileChange={onFileChange} fileType={fileType}/>
     <div style={center}>
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

