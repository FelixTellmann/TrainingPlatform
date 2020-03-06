import React, { useState, createContext, useContext } from "react";
import './Tab.scss';

const TabContext = createContext();

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

const Nav = ({ children, id }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);
  return <button onClick={() => setActiveTab(id)} className={`tab__item${activeTab === id ? ' active' : ''}`}>{children}</button>;
};

const Content = ({ children, id }) => {
  const { activeTab } = useContext(TabContext);
  return id === activeTab && <div className="tab__item">{children}</div>;
};

Tab.Nav = Nav;
Tab.Content = Content;


export default Tab;