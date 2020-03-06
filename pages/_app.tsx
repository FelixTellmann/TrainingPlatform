import App, { AppProps } from 'next/app';

import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Header, SideNavigation, ThemeProps, Frame } from 'components';
import './_app.scss';
import { Sidemenu } from "components/Sidemenu";

export type NavigationData = {
  navData: {
    id: number
    name: string
    href: string
    sidemenu: {
      id: number
      navigation_id: number
      name: string
      description: string
      href: string
      icon: string
      dropdown: {
        id: number
        navigation_sidemenu_id: number
        name: string
        description: string
        href: string
        item: {
          id: number
          navigation_dropdown_id: number
          name: string
          description: string
          href: string
        }[]
      }[]
    }[]
  }[]
}

export type Props = AppProps & NavigationData & ThemeProps

function Layout({ pageProps, navData, theme, Component }: Props) {


  return (
    <Frame>
      <Frame.Topbar>
        <Header navData={navData} theme={theme} theme_id={0} />
      </Frame.Topbar>
      <Frame.Sidebar>
        <Sidemenu navData={navData} />
        {/*<SideNavigation className="" componentCategories={componentCategory} components={component} selection={router.query} />*/}
      </Frame.Sidebar>
      <Frame.Main>
        <Component {...pageProps} />
      </Frame.Main>
      <Frame.Footer>
        Footer
      </Frame.Footer>
    </Frame>
  );
}

Layout.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const navData = await (await fetch(`http://localhost:3000/api/navigation`)).json();
  const theme = await (await fetch(`http://localhost:3000/api/theme`)).json();
  return { ...appProps, navData, theme };
};


export default Layout;