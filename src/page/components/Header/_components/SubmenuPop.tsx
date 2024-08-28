import React from "react";

interface MenuItem {
  label: string;
  link: string;
}

interface SubMenuProps {
  title: string;
  items: MenuItem[];
}
const SubmenuPop = ({ title, items }: any) => {
  return (
    <div className="item__subMenu">
      <div className="item__subMenu-one">
        <h2>{title}</h2>
        <ul>
          {items.map((item: any, index: number) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubmenuPop;
