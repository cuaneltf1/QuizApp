import { Component, OnInit } from '@angular/core';
import { UserQuizzes } from 'src/app/models/userquizzes.model';
import { UserquizService } from 'src/app/services/userquiz.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TakeQuizService } from 'src/app/services/TakeQuizService/take-quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  uquizzes: UserQuizzes[] = [];

  quiz = {
    quiz_id: 0
  }

  errorMessage = '';
  errorMessageSubscription: Subscription;

  constructor(private userquizService: UserquizService, private httpClient: HttpClient, private takeQuizService: TakeQuizService) { }

  ngOnInit() {
    this.errorMessageSubscription = this.userquizService.$userQuizErro.subscribe(errorMessage => {
      this.errorMessage = errorMessage;
    });

    this.httpClient.get<UserQuizzes[]>(`http://localhost:8080/QuizApp/userquiz`, {
      withCredentials: true
    }).subscribe(data => {
      this.uquizzes = data;
    },
    err => {
      console.log(err);
    });
  }

  // takeQuiz() {
  //   this.takeQuizService.takeQuiz(this.quiz);
  // }

}
