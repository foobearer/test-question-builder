import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionFormService } from '../question-form/question-form.service';

@Component({
  selector: 'update-question-form',
  templateUrl: './update-question-form.component.html',
  styleUrls: ['./update-question-form.component.scss']
})
export class UpdateQuestionFormComponent implements OnInit {
  updateQuestions = [];
  types;
  @Input() item;
  @Output() updateItem = new EventEmitter<[]>();

  constructor(private questionService: QuestionFormService) { }


  ngOnInit(): void {
    this.types = this.questionService.types;
    this.updateQuestions.push(this.item)
    console.log('--->', this.item);
  }

  updateAnswer(event, name) {
    console.log(this.item.question)
    this.item[name] = event.target.value;
  }

}
