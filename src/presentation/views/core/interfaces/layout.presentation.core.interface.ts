import {ReactNode} from "react";

export type ICallbackLayoutProps = Readonly<{
  children: ReactNode;
}>;
export type ICallbackLayout = ({children}: ICallbackLayoutProps) => ReactNode;

export interface ILayout {
  (): ICallbackLayout;
}

export interface IBaseLayout {
  "render": () => ReactNode;
}