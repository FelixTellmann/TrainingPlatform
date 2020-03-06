import React, { Fragment } from "react";
import './Subnav.scss';


export default function Subnav({ name, href }) {

  return (
    <ul className="subnav">
      <li className="subnav__item">
        <a href={href} className="subnav__link">
          <span className="subnav__text">{name}</span>
        </a>
        <ul className="subnav__list">
          <li className="subnav__list__item">
            <a href="#" className="subnav__list__link">
              <span className="subnav__list__text">Examples</span>
            </a>
          </li>
          <li className="subnav__list__item">
            <a href="#" className="subnav__list__link">
              <span className="subnav__list__text">Bext Practices</span>
            </a>
          </li>
          <li className="subnav__list__item">
            <a href="#" className="subnav__list__link">
              <span className="subnav__list__text">Content Guidelines</span>
            </a>
          </li>
          <li className="subnav__list__item">
            <a href="#" className="subnav__list__link">
              <span className="subnav__list__text">Related Components</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}