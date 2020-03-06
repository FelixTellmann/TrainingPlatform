import React, { FC } from "react";
import './Item.scss';
import { useRouter } from 'next/router';
import Link from "next/link";

export type ItemData = {
  id: number
  navigation_dropdown_id: number
  name: string
  description: string
  href: string
}

export const Item: FC<ItemData> = ({ id, href, name, description }) => {
  const { query: { navigation = "", sidemenu = "", dropdown = "", item = "" } } = useRouter();
  return (
    <li key={id} className="dropdown__list__item">
      <Link href={`/index?navigation=${navigation}&sidemenu=${sidemenu}&dropdown=${dropdown}&item=${href}`} as={`/${navigation}/${sidemenu}/${dropdown}/${href}`}>
        <a className="dropdown__list__link">
          <span className="dropdown__list__text">{name}</span>
        </a>
      </Link>
    </li>
  );
};