import {BaseView} from "@/presentation/views/core";
import {Header} from "@/presentation/views/components";

class ResumeView extends BaseView {
  reactNode = <main>
    <Header/>
  </main>
}

export const Resume = new ResumeView().view;