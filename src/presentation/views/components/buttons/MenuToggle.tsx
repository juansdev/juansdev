import React from "react";

export const MenuToggle = () => {
  const toggleSidebar = (element: React.MouseEvent<HTMLInputElement>) => {
    const elementSidebar = document.querySelector<HTMLElement>(".sidebar");
    console.log({elementSidebar, element: element.currentTarget.checked});
    if (elementSidebar) {
      console.log({elementSidebar, element: element.currentTarget.checked});
      if (element.currentTarget.checked) elementSidebar.classList.add("none");
      else elementSidebar.classList.remove("none");
    }
  }
  return (
    <div className="checkbox-toggle">
      <input onClick={e => toggleSidebar(e)} type="checkbox" name={"checkbox"}/>
      <div className={"hamburger"}>
        <div></div>
      </div>
    </div>
  );
}