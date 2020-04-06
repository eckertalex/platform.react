import { createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
/* -------------------------------------------------------------------------- */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

type DropdownSelectProps = {
  value: string;
  handleChange: (v: string) => void;
  options: {
    [key: string]: string;
  };
  label: string;
};

const DropdownSelect = (props: DropdownSelectProps) => {
  const classes = useStyles();
  const { value, handleChange, options, label } = props;

  const inputLabel = useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => setLabelWidth(inputLabel.current?.offsetWidth ?? 0), [label]);

  const labelId = `${label}_${Math.random()}`;
  const selectId = `${label}_${Math.random()}`;

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel ref={inputLabel} id={labelId}>
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        id={selectId}
        value={value}
        onChange={(event): void => handleChange(event.target.value as string)}
        labelWidth={labelWidth}
      >
        {Object.keys(options).map((e) => (
          <MenuItem key={e} value={e}>
            {options[e]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSelect;
