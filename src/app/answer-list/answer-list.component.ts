import { Component, OnInit } from '@angular/core';
import { QuestionFormService } from '../question-form/question-form.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {
  data;

  constructor(private questionService: QuestionFormService) { }

  ngOnInit() {
    this.questionService.answersArray.subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

}
