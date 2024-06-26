import {IResumeApplication} from "@/app/interfaces/useCases";
import {ICallbackLayout, ILayout} from "@/presentation/views/core/interfaces";
import {ICallbackResumeView, IResumeView} from "@/presentation/views/resume/interfaces";

export class ResumeApplication implements IResumeApplication {
  private readonly _rootResume: ILayout;
  private readonly _viewResume: IResumeView;

  constructor(viewResume: IResumeView, rootResume: ILayout) {
    this._viewResume = viewResume;
    this._rootResume = rootResume;
  }

  getRoot(): ICallbackLayout {
    return this._rootResume();
  }

  getResume(): ICallbackResumeView {
    return this._viewResume();
  }
}