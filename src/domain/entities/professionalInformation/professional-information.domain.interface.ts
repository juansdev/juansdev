import {IEducationInformation, IPortfolio, ISkill, IWorkExperience} from "@/domain/entities";

export interface IProfessionalSocialMedias {
  linkedIn?: string;
  facebook?: string;
  whatsapp?: string;
  x?: string;
  instagram?: string;
}

export interface IProfessionalInformation {
  jobTitle: string;
  shortResume?: string;
  fullResume: string;
  aptitudes: string[];
  education: IEducationInformation[];
  workExperience: IWorkExperience[];
  skills: ISkill[];
  portfolio: IPortfolio;
  website?: string;
  socialMedias?: IProfessionalSocialMedias[];
  urlCV: string;
}