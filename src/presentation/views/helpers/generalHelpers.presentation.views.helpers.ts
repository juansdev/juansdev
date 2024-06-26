"use client";

export const mutationObserver = (targetNode: HTMLElement, attributeFilter: string[], handler: (mutation: MutationRecord) => void): MutationObserver => {
  const config = {attributeFilter};
  const callback = function (mutations: MutationRecord[]) {
    mutations.forEach(mutation => handler(mutation));
  }
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  return observer;
};