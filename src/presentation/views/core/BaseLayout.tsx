import {IBaseLayout, ICallbackLayoutProps} from "@/presentation/views/core/interfaces";

export class BaseLayout implements IBaseLayout {
  getReactNode = ({children}: ICallbackLayoutProps) => <>{children}</>;

  layout = () => {
    return (props: ICallbackLayoutProps) => {
      return this.getReactNode(props);
    };
  }
}