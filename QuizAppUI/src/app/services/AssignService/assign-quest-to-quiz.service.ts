import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { QutoQTemplate } from 'src/app/models/questtoquiz.model';

@Injectable({
  providedIn: 'root'
})
export class AssignQuestToQuizService {

  private assignQuestErrorStream = new Subject<string>();
  $assignQuestError = this.assignQuestErrorStream.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) { }

  newQutoQ(qutoqs) {
    this.httpClient.post<QutoQTemplate>(`http://localhost:8080/QuizApp/assign`, qutoqs, {
    withCredentials: true
    }).subscribe(
      data => {
        this.router.navigateByUrl('/home');
      },
      err => {
        this.assignQuestErrorStream.next('Failed to Assign Question');
      }
    );
  }
}
