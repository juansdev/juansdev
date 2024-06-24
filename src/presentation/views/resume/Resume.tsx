import {BaseView} from "@/presentation/views/core";
import {ResumeHome} from "@/presentation/views/resume/components";

class ResumeView extends BaseView {
  reactNode = <>
    <ResumeHome/>
  </>
}

export const Resume = new ResumeView().view;