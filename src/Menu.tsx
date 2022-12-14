import React, { FC, ReactElement } from "react";
import { MenuComponentProps } from "./App.types";

const Menu: FC<MenuComponentProps> = ({
  items,
}: MenuComponentProps): ReactElement => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, img, price, desc, title } = menuItem;
        return (
          <article key={id} className="menu-item glassmorphism">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
