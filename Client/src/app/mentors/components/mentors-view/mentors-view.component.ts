import { Mentor } from './../../models/mentor';
import { Component, OnInit } from '@angular/core';
import { MentorService } from '../../services/mentor.service';

@Component({
  selector: 'app-mentors-view',
  templateUrl: './mentors-view.component.html',
  styleUrls: ['./mentors-view.component.css'],
})
export class MentorsViewComponent implements OnInit {
  constructor(private mentorService: MentorService) {}

  mentors: any = [];

  ngOnInit(): void {
    this.mentorService.fetchMentors().subscribe((data: any) => {
      this.mentors = data;
    });
  }
  deleteMentorRecord(mentorId: string) {
    this.mentorService
      .deleteMentor(mentorId)
      .subscribe((data) => console.log(data));
  }
  updateMentorRecord(mentorId: string, mentor: any) {
    this.mentorService
      .updateMentor(mentorId, mentor)
      .subscribe((data) => console.log(data));
  }
}
