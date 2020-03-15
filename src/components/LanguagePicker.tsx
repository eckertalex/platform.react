import DropdownSelect from 'fragments/inputs/DropdownSelect';
import React from 'react';
import { useTranslation } from 'react-i18next';
import locales, { getLanguage } from 'i18n/locales';
/* -------------------------------------------------------------------------- */

const LanguagePicker: React.FC = () => {
  const { i18n, t } = useTranslation();

  const [lang, setLang] = React.useState(getLanguage(i18n.language));

  const handleChangeLanguage = (value: string): void => {
    setLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <DropdownSelect
      label={t('LanguagePicker.language')}
      value={lang}
      options={locales}
      handleChange={handleChangeLanguage}
    />
  );
};

export default LanguagePicker;
