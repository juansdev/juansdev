import {ReactNode} from "react";

export interface IView {
  (): ReactNode
}

export interface IBaseView {
  "view": () => ReactNode;
}