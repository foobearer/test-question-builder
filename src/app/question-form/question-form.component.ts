import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { QuestionFormService } from './question-form.service';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  form: FormGroup;
  questions: FormArray;
  types;
  
  @Input() data = [];

  constructor(
    private questionService: QuestionFormService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.types = this.questionService.types;
    this.form = this.formBuilder.group({
      question_arr: this.formBuilder.array([this.initQuestion()])
    });
  }

  initQuestion() {
      // return this.formBuilder.group({
      //   question: ['', [Validators.required, Validators.minLength(5)]],
      //   type: ['', Validators.required],
      //   isRequired: [''],
      //   answer: this.formBuilder.array([]),
      //   choices: this.formBuilder.array([])
      // })
      return this.formBuilder.group({
      question: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', Validators.required],
      isRequired: [''],
      answer: this.formBuilder.array([]),
      choice1: [''],
      comment1_arr: this.formBuilder.array([]),
      choice2: [''],
      comment2_arr: this.formBuilder.array([]),
      choice3: [''],
      comment3_arr: this.formBuilder.array([]),
      others: ['']
    })
  }

  // questions :[ ---> question_arr
  //   description: string, ----> question
  //   type: string,
  //   answer: this.formBuilder.array([]),
  //   isRequired: boolean,
  //   choices: [
  //       choice: [
  //           isSelected: boolean,
  //           description: string,
  //           comments: []
  //       ],
  //       others: [
  //           isChecked: boolean,
  //           isSelected: boolean
  //       ]
  //   ]  
  // ]

  choicesInit() {
    return this.formBuilder.group({
      choice: this.formBuilder.array([])
    })
  }

  addChoices(questions_i) {
    const choices = (<FormArray>this.form.controls['question_arr'])
      .at(questions_i).get('choices') as FormArray;
    choices.push(this.choicesInit());
  }

  onInitComment1() {
    return this.formBuilder.group({
      comment_desc: ['']
    })
  }

  addQuestion() {
    const questions = <FormArray>this.form.controls['question_arr'];
    questions.push(this.initQuestion());
    this.questionService.setQuestionsValues(questions.value[0]);
    this.resetForm();
  }

  resetForm() {
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.form.reset();
  }

  addComment(i_questions, isChecked, name) {
    const comment = (<FormArray>this.form.controls['question_arr'])
        .at(i_questions).get(name) as FormArray;
    if (isChecked && comment.length <= 0) {
      comment.push(this.onInitComment1());
    } else {
      comment.removeAt(0);
    }
  }

}


// return this.formBuilder.group({
//   question: ['', [Validators.required, Validators.minLength(5)]],
//   type: ['', Validators.required],
//   isRequired: [''],
//   answer: this.formBuilder.array([]),
//   choice1: [''],
//   comment1_arr: this.formBuilder.array([]),
//   choice2: [''],
//   comment2_arr: this.formBuilder.array([]),
//   choice3: [''],
//   comment3_arr: this.formBuilder.array([]),
//   others: ['']
// })