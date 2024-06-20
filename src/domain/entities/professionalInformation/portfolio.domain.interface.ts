export type ITypeProject = "mobile application" | "desktop application" | "web application";

export interface IProject {
  typeProject: ITypeProject;
  name: string;
  shortDescription?: string;
  fullDescription: string;
}

export interface IPortfolio {
  projects: IProject[];
}