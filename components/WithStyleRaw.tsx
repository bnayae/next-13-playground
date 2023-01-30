import React from 'react'
import { useTranslation } from 'react-i18next';

interface IProps {
    className?: string;
}

export const WithStyleRaw = ({className}: IProps) => {
  const { t } = useTranslation('common')

  return (
    <div className={className}>Not the default: <p>{t('hello')}</p></div>
  )
}
