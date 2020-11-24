import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  form;

  // message to be display if blog added or not
  message = '';

  // Form is created in html file and write code to make it functional using FormBuilder
  // Write logic to make all fields as mandatory for form and check email is valid or not
  constructor(private formBuilder:FormBuilder,private service:BlogService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title:['',Validators.required],
      authorName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      content:['',Validators.required],
    })
  }

  // Implement onSubmit method to save a Blog, verify form is valid or not
  // Display message 'Please verify entered details!!!' if form is invalid
  // Display message 'Blog added' if Blog is added
  // Display message 'Failed to add Blog!!' while error handling
  onSubmit() {
    if(!this.form.invalid)
    {
       this.service.addBlog(this.form.value).subscribe(data=>{console.log(data);this.message='Blog added'},error=>{this.message='Failed to add Blog!!'})
    }
    else{
      this.message='Please verify entered details!!!';
    }
    this.clearForm();
  }
  // clearForm method is to reset the form after submitting
  clearForm() {
    this.form.reset()
  }
}
