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

export default function Language({onLangChange, language}) {
  const classes = useStyles();

  return(
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          onChange={onLangChange}
        >
          <MenuItem value={'french'}>French</MenuItem>
          <MenuItem value={'german'}>German</MenuItem>
          <MenuItem value={'spanish'}>Spanish</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

