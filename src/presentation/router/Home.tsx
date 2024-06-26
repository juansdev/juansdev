"use client";

import {ReactNode} from "react";
import {useDependencyContext} from "@/app/providers";
import {ICallbackLayoutProps} from "@/presentation/views/core/interfaces";
import {ICallbackResumeViewProps} from "@/presentation/views/resume/interfaces";

interface IResumeViewProps {
  props: ICallbackResumeViewProps;
}

export const Home = ({props}: IResumeViewProps): ReactNode => {
  const {resumeApplication} = useDependencyContext();
  const view = resumeApplication.getResume();
  if (view) return view(props);
}

interface IRootProps {
  props: ICallbackLayoutProps;
}

export const Root = ({props}: IRootProps) => {
  const {resumeApplication} = useDependencyContext();
  const view = resumeApplication.getRoot();
  if (view) return view(props);
}