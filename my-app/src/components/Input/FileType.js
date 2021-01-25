import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FileType() {
  const classes = useStyles();
  const [fileType, setFileType] = React.useState('');
  return(
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">FileType</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fileType}
          onChange={(event) => console.log('fileType:', event.target.value)}
        >
          <MenuItem value={'csv'}>csv</MenuItem>
          <MenuItem value={'txt'}>txt</MenuItem>
          <MenuItem value={'none'}>Null</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
