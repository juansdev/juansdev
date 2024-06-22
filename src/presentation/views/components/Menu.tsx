"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {clsx} from "clsx";

export interface IMenuItems {
  [key: string]: {
    isSelected?: boolean;
    children?: {
      [key: string]: {
        children?: string[];
      }
    }
  }
}

interface IMenuProps {
  menuItems: IMenuItems
}

export const Menu = ({menuItems}: IMenuProps) => {
  const keyMenuItemSelected = Object.keys(menuItems).find(keyMenuItem => menuItems[keyMenuItem].isSelected);
  const [nameMenuSelected, setNameMenuSelected] = useState(keyMenuItemSelected);
  useEffect(() => {
    console.log(`nameMenuSelected: ${nameMenuSelected}`);
  }, [nameMenuSelected]);
  return (
    <ul>
      {
        Object.keys(menuItems).map((nameMenuItem, index) => (
          <li key={nameMenuItem}
              onClick={() => setNameMenuSelected(nameMenuItem)}
              className={clsx({
                "menu-active": (nameMenuItem === nameMenuSelected),
                "dropdown": !!menuItems[nameMenuItem].children
              })}>
            {
              !menuItems[nameMenuItem].children ?
                <Link href="#">{nameMenuItem}</Link> : (
                  <>
                    {nameMenuItem}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clipPath="url(#clip0_25_56)">
                        <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                      </g>
                    </svg>
                    <ul>
                      {
                        Object.keys(menuItems[nameMenuItem].children!).map((nameMenuChildrenItem, index) => (
                          <li key={nameMenuChildrenItem + `_${index}`}
                              onClick={() => setNameMenuSelected(nameMenuItem)}
                          >
                            <Link href={"#"}>{nameMenuChildrenItem}</Link>
                            <ul className={`_${index + 1}`}>
                              {
                                menuItems[nameMenuItem].children![nameMenuChildrenItem].children!.map(nameSubMenuItem => (
                                  <li key={nameSubMenuItem + `_${index}`}
                                      onClick={() => setNameMenuSelected(nameMenuItem)}
                                  >
                                    <Link href={"#"}>{nameSubMenuItem}</Link>
                                  </li>
                                ))
                              }
                            </ul>
                          </li>
                        ))
                      }
                    </ul>
                  </>
                )
            }
          </li>
        ))
      }
    </ul>
  );
}