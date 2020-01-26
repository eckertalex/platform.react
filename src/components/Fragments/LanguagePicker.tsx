import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles, Theme, createStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import locales from 'utils/locales';
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

const LanguagePicker: React.FC<{}> = () => {
  const classes = useStyles();
  const { i18n, t } = useTranslation();

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [lang, setLang] = React.useState(i18n.language.split('-')[0]);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current?.offsetWidth || 0);
  }, []);

  const handleChangeLanguage = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setLang(event.target.value as string);
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="language-picker-label">
        {t('LanguagePicker.language')}
      </InputLabel>
      <Select
        labelId="language-picker-label"
        id="language-picker"
        value={lang}
        onChange={handleChangeLanguage}
        labelWidth={labelWidth}
      >
        {Object.keys(locales).map(locIndex => (
          <MenuItem key={locIndex} value={locIndex}>
            {locales[locIndex]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguagePicker;
