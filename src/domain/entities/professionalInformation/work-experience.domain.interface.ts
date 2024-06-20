import {ICompany} from "@/domain/entities";

export interface IWorkExperience {
  name: string;
  shortDescription?: string;
  fullDescription: string;
  dateStart: Date;
  dateEnd?: Date;
  business: ICompany;
}