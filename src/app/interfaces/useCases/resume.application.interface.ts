import {ICallbackLayout} from "@/presentation/views/core/interfaces";
import {ICallbackResumeView} from "@/presentation/views/resume/interfaces";

export interface IResumeApplication {
  getRoot(): ICallbackLayout;

  getResume(): ICallbackResumeView;
}