import React from "react";
import { NextPage } from 'next';

import './Logo.scss';

export type ThemeProps = {
  theme: Array<{
    store_id: number
    logo_url: string
    logo_alt: string
    name?: string
    description?: string
  }>
  theme_id: number
}

export const Logo: NextPage<ThemeProps> = ({ theme, theme_id }) => {
  const { logo_alt, logo_url } = theme[theme_id];
  return (
    <img className="logo" src={logo_url} alt={logo_alt} />
  );
};