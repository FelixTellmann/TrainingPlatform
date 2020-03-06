import React, { Fragment } from "react";
import { Subnav } from './Subnav';

import './SideNavigation.scss';

export function SideNavigation({ className, componentCategories, components, selection }) {

  return (
    <nav className={`${className || ""} secondary-nav`}>
      {
        componentCategories.map(({ component_category_id, name, description, icon }) => {
          return (
            <div key={component_category_id} className="secondary-nav__item">
             {/* {(name.toLowerCase() === selection.category.toLowerCase()) ? console.log('wohoo') : null}*/}
              <a href="#" className="secondary-nav__link">
                {React.createElement(require('react-icons/io')[icon], { className: "secondary-nav__icon" })}
                <span className="secondary-nav__text">{name}</span>
              </a>
              {
                components.filter(({ component_category_id: cat_id }) => cat_id === component_category_id /*&& active*/).map(({ component_id, name, description, href }) => {
                  return (
                    <Subnav key={component_id} name={name} href={href} />
                  );
                })
              }
            </div>
          );
        })
      }

    </nav>
  );
}