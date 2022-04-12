export interface Mentor {
  _id?: string;
  mentorName: string;
  monthExperience: number;
  yearExperience: number;
  mentorSkills?: Array<string>;
  imgUrl?: string;
}
