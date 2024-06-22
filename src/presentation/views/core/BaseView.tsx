import {ReactNode} from "react";
import {IBaseView} from "@/presentation/views/core/interfaces";

export class BaseView implements IBaseView {
  public reactNode: ReactNode = <></>;
  view = (): ReactNode => this.reactNode;
}