import {IEducationalCenter} from "@/domain/entities";

export interface IEducationInformation {
  name: string;
  shortDescription?: string;
  fullDescription: string;
  dateStart: Date;
  dateEnd?: Date;
  educationalCenter: IEducationalCenter;
}