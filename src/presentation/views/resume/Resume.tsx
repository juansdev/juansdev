import {BaseView} from "@/presentation/views/core";
import {Header} from "@/presentation/views/components";
import {Sidebar} from "@/presentation/views/components/sidebar/Sidebar";

class ResumeView extends BaseView {
  reactNode = <main>
    <div className={"fix-bg"}>
      <div className={"main-content"}>
        <Sidebar/>
        <Header/>
      </div>
    </div>
  </main>
}

export const Resume = new ResumeView().view;