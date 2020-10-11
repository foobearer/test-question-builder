import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionFormService {

types = ['paragraph','checkbox','radio'];
  questionsArray = new BehaviorSubject([]);
  answersArray = new BehaviorSubject([]);

  constructor() { }
  setQuestionsValues(val) {
    this.questionsArray.next(val);
  }
  setAnswers(val) {
    console.log({val});
    this.answersArray.next(val);
  }
}
