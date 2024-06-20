export type ITypeEducation =
  "school"
  | "technical"
  | "technological"
  | "higher"
  | "non-formal"
  | "rural and distance"
  | "special";

interface ICommon {
  shortName?: string;
  fullName: string;
  nit?: string;
}

export interface ISchool extends ICommon {
}

export interface ITechnical extends ICommon {
}

export interface ITechnological extends ICommon {
}

export interface IHigher extends ICommon {
}

export interface INonFormal extends ICommon {
}

export interface IRuralAndDistance extends ICommon {
}

export interface ISpecial extends ICommon {
}

export interface IEducationalCenter {
  typeEducation: ITypeEducation;
  educationalCenter: ISchool | ITechnical | ITechnological | IHigher | INonFormal | IRuralAndDistance | ISpecial;
}