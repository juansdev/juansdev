import {IResumeApplication} from "@/app/interfaces/useCases";
import {ReactNode} from "react";
import {ICallbackLayout, ILayout, IView} from "@/presentation/views/core/interfaces";

export class ResumeApplication implements IResumeApplication {
  private readonly _rootResume: ILayout;
  private readonly _viewResume: IView;

  constructor(viewResume: IView, rootResume: ILayout) {
    this._viewResume = viewResume;
    this._rootResume = rootResume;
  }

  getRoot(): ICallbackLayout {
    return this._rootResume();
  }

  getResume(): ReactNode {
    return this._viewResume();
  }
}