"use client";

import {RefObject, useEffect, useState} from "react";

export function useIsVisible<T>(ref: RefObject<T>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(<Element>ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const isScrolledIntoView = (element: HTMLElement) => {
  const docViewTop = window.scrollY;
  const docViewBottom = docViewTop + window.innerHeight;

  const elemTop = element.getBoundingClientRect().top + window.scrollY;
  const elemBottom = elemTop + element.offsetHeight;

  return (elemBottom <= docViewBottom) && (elemTop >= docViewTop);
}

export const toggleClassNameOfSelectorIfElementIsVisible = (selector: string, classNameToToggle: string) => {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  elements.forEach(function (elem) {
    if (isScrolledIntoView(elem))
      elem.classList.add(...classNameToToggle.split(" "));
    else elem.classList.remove(...classNameToToggle.split(" "));
  });
}


export const toggleClassNameOfSelectorIfElementIsVisibleByScroll = (containerScrollable: Element, selector: string, classNameToToggle: string) => {
  containerScrollable.addEventListener('scroll', () => toggleClassNameOfSelectorIfElementIsVisible(selector, classNameToToggle));
}