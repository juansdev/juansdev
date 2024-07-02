import React from "react";
import {IBaseView} from "@/presentation/views/core/interfaces";

export abstract class CustomView extends React.Component implements IBaseView {
  static baseRef: React.RefObject<HTMLDivElement>;
}