"use client";

import Link from "next/link";
import Image from "next/image";
import {clsx} from "clsx";
import {useState} from "react";

export interface IMenuSidebarItems {
  [key: string]: {
    href: string;
    pathImage: string;
    altImage: string;
    isSelected?: boolean;
  }
}

interface IMenuSidebarProps {
  menuItems: IMenuSidebarItems;
}

export const MenuSidebar = ({menuItems}: IMenuSidebarProps) => {
  const keyMenuItemSelected = Object.keys(menuItems).find(keyMenuItem => menuItems[keyMenuItem].isSelected);
  const [nameMenuSelected, setNameMenuSelected] = useState(keyMenuItemSelected);
  return (
    <ul className={"menu-list-main"}>
      {
        Object.keys(menuItems).map(((nameMenuItem, index) => (
          <li key={nameMenuItem + `_${index}`}>
            <Link className={clsx("element-to-modify-by-scroll show", {
              "active": nameMenuItem === nameMenuSelected
            })}
                  href={menuItems[nameMenuItem].href}
                  onClick={() => setNameMenuSelected(nameMenuItem)}>
              <Image src={menuItems[nameMenuItem].pathImage}
                     alt={menuItems[nameMenuItem].altImage}
                     width={24} height={24}/>
              {nameMenuItem}
            </Link>
          </li>
        )))
      }
    </ul>
  );
}