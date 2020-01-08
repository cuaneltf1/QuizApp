import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { QuestsTemplate } from 'src/app/models/questions.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TakeQuizService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  // takeQuiz(quiz) {
  //   this.httpClient.get<QuestsTemplate>(`http://localhost/QuizApp/userquiz`, quiz, {
  //     withCredentials: true
  //   }).subscribe(
  //     data => {
  //       this.router.navigateByUrl('/home');
  //     }
  //   )
  // }
}
