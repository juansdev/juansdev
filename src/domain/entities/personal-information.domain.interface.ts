export interface IPersonalSocialMedias {
  linkedIn?: string;
  facebook?: string;
  whatsapp?: string;
  x?: string;
  instagram?: string;
}

export interface IPersonalInformation {
  firstName: string;
  middleName?: string;
  firstLastName: string;
  lastSecondLastName?: string;
  nationality: string;
  phone?: string;
  email: string;
  gitHub?: string;
  socialMedias?: IPersonalSocialMedias[];
}