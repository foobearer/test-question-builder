import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionFormService } from '../question-form/question-form.service';
import { QuestionType } from '../question.enum';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions = [];
  toggleBtnText = 'Edit/Delete';
  formIndex: -1;

  constructor(
    private questionService: QuestionFormService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.questionService.questionsArray.subscribe(questions => {
      this.questions.push(questions);
    });
    console.log(this.questions);
  }

  addAnswer(val: string, index: number, type?: string, isChecked?: any) {
    let answer = this.questions[index].answer; 
    if (type === QuestionType.CHECKBOX) {
      if (isChecked) {
        answer.push(val);
      } else {
        const i = answer.indexOf(val);
        answer.splice(i, 1);
      }
    } else {
      answer[0] = val;  
    }
    
  }

  reviewAnswer() {
    console.log(this.questions);
    this.questionService.setAnswers(this.questions);
    this.router.navigate(['/answers']);
  }

  toggleEditBtn(el, index) {

    this.formIndex === index ? this.formIndex = -1 : this.formIndex = index;
    const label = this.formIndex !== -1 ? 'Edit' : 'Edit/Delete';
    el.textContent = label;
  }

  deleteItem(index) {
    this.questions.splice(index, 1);
  }

}
