import React, {useEffect, useRef} from "react";
import {useIsVisible} from "@/presentation/views/helpers";
import {Sidebar} from "@/presentation/views/components";

export const MenuToggle = () => {
  const checkboxToggleRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(checkboxToggleRef);

  const toggleSidebar = (element: React.MouseEvent<HTMLInputElement>) => {
    const elementSidebar = Sidebar.baseRef;
    const scrollableContainerSidebar = Sidebar.scrollableContainer;
    if (elementSidebar.current) {
      if (element.currentTarget.checked) elementSidebar.current.classList.add("show");
      else {
        elementSidebar.current.classList.remove("show");
        scrollableContainerSidebar.removeClassFromElements();
      }
    }
  }

  useEffect(() => {
    const elementSidebar = Sidebar.baseRef;
    if (elementSidebar.current) {
      const scrollableContainerSidebar = Sidebar.scrollableContainer;
      if (isVisible) {
        elementSidebar.current.classList.remove("show");
        scrollableContainerSidebar.removeClassFromElements();
      } else if (!elementSidebar.current.classList.contains("show")) elementSidebar.current.classList.add("show");
    }
  }, [isVisible]);

  return (
    <div className="checkbox-toggle" ref={checkboxToggleRef}>
      <input onClick={e => toggleSidebar(e)} type="checkbox" name={"checkbox"}/>
      <div className={"hamburger"}>
        <div></div>
      </div>
    </div>
  );
}