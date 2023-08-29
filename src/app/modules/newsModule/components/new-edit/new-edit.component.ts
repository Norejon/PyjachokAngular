import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NewService} from "../../../../services/new.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.css']
})
export class NewEditComponent {
  editForm: FormGroup;

  constructor(private newService:NewService, private route:ActivatedRoute,private location: Location) {
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      title: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
    });
  }

  submitForm() {
    if (this.editForm.valid) {

      const title = this.editForm.controls['title'].value;
      const type = this.editForm.controls['type'].value;
      const text = this.editForm.controls['text'].value;
      console.log(title,type,text);
      const id = this.route.snapshot.paramMap.get('id');

      this.newService.updateNew(Number(id),title,type,text).subscribe(
        (response) => {
          this.location.back();
          console.log('Успішно оновлено новину', response);
        },
        (error) => {
          console.error('Помилка оновлення новини', error);
        }
      );
    }
  }
  goBack() {
    this.location.back();
  }
}
