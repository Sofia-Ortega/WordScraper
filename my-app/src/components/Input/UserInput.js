import React from 'react';
import Language from './Language';
import FileType from './FileType';
import Button from '@material-ui/core/Button';


const center = {
  // marginLeft: '12.5vw',
  display: 'block',
  margin: 'auto',
  //width: '12.5vw',

}

export default function UserInput({changeDisplay}) {
  const [language, setLanguage] = React.useState('');
  const [fileType, setFileType] = React.useState('');

  const onLangChange = (e) => {
    setLanguage(e.target.value);
  }

  const onFileChange = (e) => {
    setFileType(e.target.value);
  }

  const getData = () => {
    console.log(language, fileType);
  }

  return(
    <div >
     <Language onLangChange={onLangChange} language={language}/>
     <FileType onFileChange={onFileChange} fileType={fileType}/>
     <div >
       <Button
         variant="contained"
         color="primary"
         onClick={() => {getData(); changeDisplay();}}
         style={center}
       >
         Go!
       </Button>
     </div>
    </div>
  )
}

