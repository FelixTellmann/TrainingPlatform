import { FC } from "react";
import React from "react";
import './Frame.scss';


type Frame = FC & {
  Topbar: FC
  Sidebar: FC
  Main: FC
  Footer: FC
}

export const Frame: Frame = ({ children }) => {
  return (
    <div className="frame">
      {children}
    </div>
  );
};

const Topbar: FC = ({ children }) => {
  return (
    <header className="frame__topbar">
      {children}
    </header>
  );
};
const Sidebar: FC = ({ children }) => {
  return (
    <aside className="frame__sidebar">
      {children}
    </aside>
  );
};
const Main: FC = ({ children }) => {
  return (
    <main className="frame__main">
      {children}
    </main>
  );
};
const Footer: FC = ({ children }) => {
  return (
    <footer className="frame__footer">
      {children}
    </footer>
  );
};

Frame.Topbar = Topbar;
Frame.Sidebar = Sidebar;
Frame.Main = Main;
Frame.Footer = Footer;


