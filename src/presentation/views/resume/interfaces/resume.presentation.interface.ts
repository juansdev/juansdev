import {ReactNode} from "react";

export type ICallbackResumeViewProps = Readonly<{}>;

export type ICallbackResumeView = (props: ICallbackResumeViewProps) => ReactNode;

export interface IResumeView {
  (): ICallbackResumeView;
}