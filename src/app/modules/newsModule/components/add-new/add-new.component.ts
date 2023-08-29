import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NewService} from "../../../../services/new.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit{

  newsForm: FormGroup;

  constructor(private formBuilder: FormBuilder ,private newService:NewService,private route:ActivatedRoute,private location: Location) {}

  ngOnInit() {
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.newsForm.valid) {
      const title = this.newsForm.value.title;
      const type = this.newsForm.value.type;
      const text = this.newsForm.value.text;
      const id = this.route.snapshot.paramMap.get('id');

      this.newService.addNew(Number(id), title, type, text).subscribe(
        (response) => {
          console.log('Успішно додано', response);
        },
        (error) => {
          console.error('Помилка додавання', error);
        }
      );
      this.newsForm.reset();
      this.location.back();
    }
    }
  goBack() {
    this.location.back();
  }
  }

