import React, { useState, createContext, useContext } from "react";
import { Tab } from './Tab';
import './Page.scss';


export function Page() {
  return (
    <div className="page">
      <section className="intro">
        <div className="page__content">
          <h1 className="intro__title">Page</h1>
          <p className="intro__text">
            Use to build the outer wrapper of a page, including the page title
            and associated actions.
          </p>
        </div>
      </section>
      <section className="tab">
        <Tab>
          <div className="page__content tab__navigation">
            <Tab.Nav id={1}>Web</Tab.Nav>
            <Tab.Nav id={2}>Android</Tab.Nav>
            <Tab.Nav id={3}>iOS</Tab.Nav>
          </div>
          <div className="page__content tab__content">
            <Tab.Content id={1}>Content Tab 1</Tab.Content>
            <Tab.Content id={2}>Content Tab 2</Tab.Content>
            <Tab.Content id={3}>Content Tab 3</Tab.Content>
          </div>
        </Tab>
      </section>

    </div>
  );
}