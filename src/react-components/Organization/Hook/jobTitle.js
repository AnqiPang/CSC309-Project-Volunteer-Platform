/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  option: {
    fontSize: 20,
    '& > span': {
      marginRight: 10,
      fontSize: 20,
    },
  },
});

export default function TitleSelect() {
  const classes = useStyles();

  return (
    <Autocomplete
      id="title-select-demo"
      style={{ width: "100%" }}
      options={jobTitles}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.title}
      renderOption={(option) => (
        <React.Fragment>
          
          {option.title}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a job area"
          InputLabelProps={{style: {fontSize: 20} }}
          required
          variant="filled"
          inputProps={{
            ...params.inputProps,
            style: {fontSize: 20},
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

const jobTitles = [
    { title: 'IT'},
    { title: 'driver'},
    { title: 'laborer'},
    { title: 'finance'},
    { title: 'food'},
    { title: 'arts'},
    { title: 'healthcare'},
    { title: 'retail'},
    { title: 'education'}
  ];
