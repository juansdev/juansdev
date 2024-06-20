import {ResumeApplication} from "@/app/useCases/resume";
import {Resume} from "@/presentation/views/resume";
import {Root} from "@/presentation/views";

interface IDependencies {
  "resumeApplication": ResumeApplication;
}

export class ManageDependency {
  private static _instance: ManageDependency;
  public dependencies: IDependencies;

  private constructor() {
    this.dependencies = {
      "resumeApplication": new ResumeApplication(Resume, Root)
    }
  }

  public static getInstance(): ManageDependency {
    if (!ManageDependency._instance) {
      ManageDependency._instance = new ManageDependency();
    }
    return ManageDependency._instance;
  }
}
