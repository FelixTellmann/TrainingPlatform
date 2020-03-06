import React, { FC } from "react";
import './Sidemenu.scss';
import { NavigationData } from 'pages/_app';
import { DropdownData } from './Dropdown';

import { useRouter } from 'next/router';
import Link from "next/link";
import { Dropdown } from "components/Sidemenu/Dropdown";


export const Sidemenu: FC<NavigationData> = ({ navData }) => {
  const { query: { navigation = "", sidemenu = "", dropdown = "", item = "" } } = useRouter();
  const currentSidemenu = navigation && navData.find(({ href }) => navigation === href).sidemenu;

  return (
    <nav className="sidemenu">
      {
        currentSidemenu && currentSidemenu.map(({ id, name, description, icon, href, dropdown: dropdownArray }) => {
          return (
            <div key={id} className="sidemenu__item">
              <Link key={id} href={`/index?navigation=${navigation}&sidemenu=${href}`} as={`/${navigation}/${href}`}>
                <a className={`sidemenu__link${sidemenu === href ? ' active' : ''}`}>
                  {React.createElement(require('react-icons/io')[icon], { className: "sidemenu__icon" })}
                  <span className="sidemenu__text">{name}</span>
                </a>
              </Link>
              {
                sidemenu === href && dropdownArray && dropdownArray.map(item => <Dropdown {...item} />)
              }
            </div>
          );
        })
      }

    </nav>
  );
};