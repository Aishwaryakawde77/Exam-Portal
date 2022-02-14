import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
   
  quizzes=[
    {
      qId:25,
      title:'Basic Java',
      description:'core Java is the part of Java SE where the developers develop desktop-based applications',
      maxMarks:'20',
      numberOfQuestions:'5',
      active:'',
      category:{
        title:'Programming',
      },
    },
  ]
  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {

    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Error in loading data",'error');
      }
    );
  }

  //delete quiz
  deleteQuiz(qId:any)
  {

    this._quiz.deleteQuiz(qId).subscribe(
      (data)=>{
        this.quizzes=this.quizzes.filter((quiz)=>quiz.qId!=qId)
        Swal.fire('Success','Quiz delete','success');

      },
      (error)=>{
        Swal.fire('Error','Error to delete','error');

      }
    );
  }

}
