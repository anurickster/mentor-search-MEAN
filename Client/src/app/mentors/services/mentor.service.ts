import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mentor } from '../models/mentor';

const baseUrl = 'http://localhost:9000/mentors/';

@Injectable({
  providedIn: 'root',
})
export class MentorService {
  constructor(private http: HttpClient) {}

  fetchMentors() {
    return this.http.get(baseUrl);
  }

  addMentor(mentor: any) {
    return this.http.post(baseUrl, mentor);
  }

  updateMentor(id: string, mentor: Mentor) {
    return this.http.patch(baseUrl + id, mentor);
  }

  deleteMentor(id: string) {
    return this.http.delete(baseUrl + id);
  }
}
