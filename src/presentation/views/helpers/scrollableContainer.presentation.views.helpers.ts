export class ScrollableContainer {
  private readonly _container: Element;
  private readonly _childSelector: string;
  private readonly _toggleClass: string;
  private readonly _isVisible: boolean;

  constructor(container: Element, childSelector: string, toggleClass: string, isVisible: boolean) {
    this._container = container;
    this._childSelector = childSelector;
    this._toggleClass = toggleClass;
    this._isVisible = isVisible;
    this.init();
  }

  /**
   * Removes the specified class from all elements that match the child selector.
   */
  public removeClassFromElements() {
    this._container.querySelectorAll<HTMLElement>(`.${this._toggleClass}`).forEach((element) => {
      element.classList.remove(this._toggleClass);
    });
  }

  /**
   * Initializes the toggling functionality based on the visibility of the _container.
   */
  private init() {
    if (this._container) {
      if (this._isVisible) {
        this.toggleClassBasedOnVisibility();
        this.addScrollListener();
        this.addWindowResizeListener();
      } else {
        this.removeClassFromElements();
      }
    }
  }

  /**
   * Checks if an element is scrolled into view within the _container.
   *
   * @param element - The element to check for visibility.
   * @returns Whether the element is visible within the _container.
   */
  private isElementInView(element: HTMLElement): boolean {
    const docViewTop = window.innerHeight + this._container.scrollTop;
    const elemTop = element.getBoundingClientRect().top;
    const elemBottom = element.getBoundingClientRect().bottom;
    return docViewTop >= elemTop && elemBottom >= 0;
  }

  /**
   * Toggles the specified class on elements based on their visibility within the _container.
   */
  private toggleClassBasedOnVisibility() {
    const elements = this._container.querySelectorAll<HTMLElement>(this._childSelector);
    elements.forEach((element) => {
      if (this.isElementInView(element)) {
        element.classList.add(...this._toggleClass.split(" "));
      } else {
        element.classList.remove(...this._toggleClass.split(" "));
      }
    });
  }

  /**
   * Adds a scroll listener to the _container to toggle the class based on visibility.
   */
  private addScrollListener() {
    this._container.addEventListener('scroll', () => this.toggleClassBasedOnVisibility());
  }

  /**
   * Adds an event listener to the window that triggers the visibility-based class toggle
   * function whenever the window is resized.
   */
  private addWindowResizeListener() {
    window.addEventListener('resize', () => this.toggleClassBasedOnVisibility());
  }
}
