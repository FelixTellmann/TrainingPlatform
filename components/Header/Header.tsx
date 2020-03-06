import { FC } from "react";
import { Navigation, Search, Logo, ThemeProps } from 'components';
import { NavigationData } from 'pages/_app';

import './Header.scss';

export const Header: FC<NavigationData & ThemeProps> = ({ theme, navData, theme_id }) => {
  return (
    <header className="header">
      <Logo theme={theme} theme_id={theme_id} />
      <Navigation navData={navData} />
      <Search />
    </header>
  );
};

