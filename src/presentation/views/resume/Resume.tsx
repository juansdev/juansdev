import React, {createRef, RefObject} from "react";
import {ResumeHome} from "@/presentation/views/resume/components";
import {ScrollableContainer} from "@/presentation/views/helpers";
import {ICallbackResumeViewProps, IResumeView} from "@/presentation/views/resume/interfaces";
import {CustomView} from "@/presentation/views/interfaces/view.presentation.interface";
import {AssociateBrands} from "@/presentation/views/components/brands/AssociateBrands";

class ResumeView extends CustomView {
  public static baseRef: RefObject<HTMLDivElement>;

  constructor(props: ICallbackResumeViewProps) {
    super(props);
    ResumeView.baseRef = createRef<HTMLDivElement>();
  }

  componentDidMount() {
    if (ResumeView.baseRef.current)
      new ScrollableContainer(
        ResumeView.baseRef.current,
        ".element-to-modify-by-scroll",
        "show",
        ResumeView.baseRef.current.classList.contains("show")
      );
  }

  render() {
    return (
      <div ref={ResumeView.baseRef} className={"page-resume show"}>
        <ResumeHome/>
        <AssociateBrands/>
      </div>
    );
  }
}

export const Resume: IResumeView = () => {
  function render(_: ICallbackResumeViewProps) {
    return <ResumeView/>;
  }

  return render;
};