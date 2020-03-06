import React, { FC } from "react";
import './Dropdown.scss';
import { ItemData } from './Item';
import { useRouter } from 'next/router';
import Link from "next/link";
import { Item } from "components/Sidemenu/Dropdown/Item";

export type DropdownData = {
  id: number
  navigation_sidemenu_id: number
  name: string
  description: string
  href: string
  item: ItemData[]
}

export const Dropdown: FC<DropdownData> = ({ id, name, description, href, item: itemArray }) => {
  const { query: { navigation = "", sidemenu = "", dropdown = "", item = "" } } = useRouter();

  return (
    <ul key={id} className="dropdown ">
      <li className="dropdown__item">
        <Link href={`/index?navigation=${navigation}&sidemenu=${sidemenu}&dropdown=${href}`} as={`/${navigation}/${sidemenu}/${href}`}>
          <a className={`dropdown__link${dropdown === href ? ' active' : ''}`}>
            <span className="dropdown__text">{name}</span>
          </a>
        </Link>
        <ul className={`dropdown__list${dropdown === href ? ' active' : ''}`}>
          {
            dropdown === href && itemArray && itemArray.map(item => <Item {...item} />)
          }
        </ul>
      </li>
    </ul>

  );
};