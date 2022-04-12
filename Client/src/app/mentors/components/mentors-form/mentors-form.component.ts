import { MentorService } from './../../services/mentor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentors-form',
  templateUrl: './mentors-form.component.html',
  styleUrls: ['./mentors-form.component.css'],
})
export class MentorsFormComponent implements OnInit {
  constructor(private mentorService: MentorService) {}

  ngOnInit(): void {}

  add = (
    mentorName: string,
    yearExperience: string,
    monthExperience: string
  ) => {
    this.mentorService
      .addMentor({
        mentorName,
        yearExperience: parseInt(yearExperience),
        monthExperience: parseInt(monthExperience),
      })
      .subscribe((data) => console.log(data));
  };
}
