export type IDomainOfSkill = "Basic" | "Intermediate" | "Advanced";

export interface IExperienceSkill {
  domain: IDomainOfSkill;
  amountOfDays?: number;
  percentageSkill?: number;
}

export interface ISkill {
  name: string;
  experience: IExperienceSkill;
}