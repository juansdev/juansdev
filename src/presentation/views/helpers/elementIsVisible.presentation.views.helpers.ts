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

const isScrolledIntoView = (containerScrollable: Element, element: HTMLElement) => {
  const docViewTop = window.innerHeight + containerScrollable.scrollTop;
  const elemTop = element.getBoundingClientRect().top;
  const elemBottom = element.getBoundingClientRect().bottom;
  return docViewTop >= elemTop && elemBottom >= 0;
}

export const toggleClassNameOfSelectorIfElementIsVisible = (containerScrollable: Element, selector: string, classNameToToggle: string) => {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  elements.forEach(function (elem) {
    if (isScrolledIntoView(containerScrollable, elem))
      elem.classList.add(...classNameToToggle.split(" "));
    else elem.classList.remove(...classNameToToggle.split(" "));
  });
}


export const toggleClassNameOfSelectorIfElementIsVisibleByScroll = (containerScrollable: Element, selector: string, classNameToToggle: string) => {
  containerScrollable.addEventListener('scroll', () => toggleClassNameOfSelectorIfElementIsVisible(containerScrollable, selector, classNameToToggle));
}