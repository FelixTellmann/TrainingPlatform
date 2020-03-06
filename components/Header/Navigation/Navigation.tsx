import { FC } from "react";
import './Navigation.scss';
import { NavigationData } from 'pages/_app';
import { useRouter } from 'next/router';
import Link from 'next/link';


export const Navigation: FC<NavigationData> = ({ navData }) => {
  const { query: { navigation = "" } } = useRouter();
  return (
    <nav className="nav">
      {
        navData.map(({ id, name, href }) => {
          return (
            <Link key={id} href={`/index?navigation=${href}`} as={'/' + href}>
              <a className={`nav__link${navigation === href ? ' active' : ''}`}><span className="nav__text">{name}</span></a>
            </Link>
          );
        })
      }
    </nav>
  );
};
