import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
   [x:string]:any;
  constructor(private _htttp:HttpClient) { }
  public getQuestionsOfQuiz(qid:any)
  {
      return this._htttp.get(`${baseurl}/question/quiz/all/${qid}`);
  }
  //add question
  public addQuestion(question:any)
  {
        return this._htttp.post(`${baseurl}/question/`,question);
  }
}
