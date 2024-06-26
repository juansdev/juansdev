import {IBaseLayout, ICallbackLayoutProps} from "@/presentation/views/core/interfaces";
import React from "react";

export class BaseLayout extends React.Component<ICallbackLayoutProps> implements IBaseLayout {
  constructor(props: ICallbackLayoutProps) {
    super(props);
  }

  public render() {
    return <>{this.props.children}</>;
  }
}