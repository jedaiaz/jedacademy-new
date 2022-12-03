import React from 'react'
import Breadcrumbs from 'nextjs-breadcrumbs';
import useTranslation from "next-translate/useTranslation";


function Breadcrumb() {
  const { t } = useTranslation();
  return (
    <Breadcrumbs useDefaultStyle rootLabel={t(`common:homepage`)}/> 
  )
}

export default Breadcrumb