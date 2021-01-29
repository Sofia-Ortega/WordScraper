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

export default function FileType({onFileChange, fileType}) {
  const classes = useStyles();
  return(
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">FileType</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fileType}
          onChange={onFileChange}
        >
          <MenuItem value={'csv'}>csv</MenuItem>
          <MenuItem value={'txt'}>txt</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

