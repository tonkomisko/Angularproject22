import { Component, OnInit } from '@angular/core';
import { Comment } from './comment';
// import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { BlogComments } from '../interface/blog-comments';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../service/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: 'blog.html',
  styleUrls: ['./blog.css'],
})
export class BlogComponent implements OnInit {
  comments!: Comment[];
  inputComment: string = '';
  commentsData: any[] = JSON.parse(localStorage.getItem("comments") || "[]");
  blogComments!: Observable<BlogComments[]>;


  readonly ROOT_URL = environment.ROOT_URL;
  


  setToStorage(){
    localStorage.setItem("comments", JSON.stringify(this.commentsData));
  }
  
  

  constructor(private http: HttpClient, public blogService: BlogService) {}

  ngOnInit(): void{
    // this.getComments();
    this.showComments();
 
  }

  addComment() {
    // this.commentsData
    const currentDate = new Date();
    if (this.inputComment == '') {
      alert("You haven't entered a comment");
    } else {
      this.commentsData.push({
        id: this.commentsData.length + 1,
        content: this.inputComment,
        author: 'Janko Hrasko',
        dateTime: currentDate.toDateString() + ' at ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(),
        status: 'read'
      })
      localStorage.setItem("comments", JSON.stringify(this.commentsData));
    }
    console.log(this.commentsData);
    this.inputComment = '';
  }


 

  switchStatus(comment:any){
    debugger;
    if(comment.status == 'read'){
      comment.status = 'edit';
    }else {
      comment.status = 'read';
    }
  }

 

  getComments() {
    // this.blogComments = this.http.get(this.ROOT_URL)
     return this.http.get<any>(`https://626fc2eff7d739495bdbd882.mockapi.io/api/comments/blog_comments`);
    
   
    

   }

newComments:any;

showComments(){

  
      this.getComments()
        .subscribe((data: any) =>  {

          this.newComments = data;
          for(let i = 0; i< this.newComments.length; i++){
            this.newComments[i].status = 'read';
          }
           
        });
   

}

   comment!: BlogComments;
   
   BlogComments: BlogComments[] = [];
   id1 = this.BlogComments;

  
  
   addCommentForm = new FormGroup({
    content: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
  });
  


  postComment() {
    const currentDate = new Date();
    this.comment = this.addCommentForm.value;
    this.blogService.postComment(this.comment).
    subscribe((response: any)=> {
      // console.log(response);
      this.BlogComments.push({

        content: response.content,
        author: response.author,
        dateTime: currentDate.toDateString() + ' at ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(),
        status: 'read'

      })
      
      

      this.showComments();
     
    })
    
    
  }


  deleteComment(id1:string){
    // this.id1 = id
    // debugger;
    this.blogService.deleteComment(id1)
    .subscribe({
      next: data => {
       console.log(data);
       this.showComments();
      //  this.getComments();
      },
      error: error =>{
        console.log(error)
      }

    });

   
    
      
     
  
  
}

updateComment(comment: any){
debugger;
  const currentDate = new Date();
  const id1 = comment.id
    this.comment = this.addCommentForm.value;
    this.blogService.putComment(id1,comment).
    subscribe((response: any)=> {
      // console.log(response);
      this.BlogComments.push({

        content: response.content,
        author: response.author,
        dateTime: currentDate.toDateString() + ' at ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(),
        status: 'read'

      })
      

      this.getComments();
     
    })

  
}

}

// https://www.angularjswiki.com/httpclient/post/