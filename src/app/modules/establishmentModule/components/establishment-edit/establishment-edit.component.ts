import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EstablishmentService} from "../../../../services/establishment.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-establishment-edit',
  templateUrl: './establishment-edit.component.html',
  styleUrls: ['./establishment-edit.component.css']
})
export class EstablishmentEditComponent {
  form: FormGroup;
  tags: string[] = ['Безкоштовна парковка', 'Вайфай', 'Оплата криптовалютою', 'Веганське меню', 'Святкування'];

  constructor(private formBuilder: FormBuilder, private establishmentService: EstablishmentService,private route:ActivatedRoute,private location:Location) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      midle_check: ['', Validators.required],
      location: ['', Validators.required],
      schedule: ['', Validators.required],
      tags: this.buildTagsFormGroup(),
      website: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      telegram: ['',Validators.required],
      instagram: ['',Validators.required],
      others: ['',Validators.required],
    });
  }

  get tagsFormArray() {
    return this.form.get('tags') as FormArray;
  }

  private buildTagsFormGroup() {
    const group = this.formBuilder.group({});
    this.tags.forEach((tag) => {
      group.addControl(tag, new FormControl(false));
    });
    return group;
  }

  submitForm() {
    if (this.form.valid) {
      const name = this.form.controls['name'].value;
      const type = this.form.controls['type'].value;
      const midle_check = this.form.controls['midle_check'].value;
      const location = this.form.controls['location'].value;
      const schedule = this.form.controls['schedule'].value;
      const tags = Object.keys(this.form.controls['tags'].value).filter((key) => this.form.controls['tags'].value[key]);
      const id = this.route.snapshot.paramMap.get('id');
      const website = this.form.controls['website'].value;
      const email = this.form.controls['email'].value;
      const phone = this.form.controls['phone'].value;
      const telegram = this.form.controls['telegram'].value;
      const instagram = this.form.controls['instagram'].value;
      const others = this.form.controls['others'].value;

      const contacts ={website,email,phone,telegram,instagram,others}

      console.log(this.form.value);
      console.log(tags);
      this.establishmentService.updateEstablishment(Number(id),name, type, midle_check, location, schedule, tags,contacts).subscribe(
        (response) => {
          console.log('Успішно додано', response);
        },
        (error) => {
          console.error('Помилка додавання', error);
        }
      );
    } else {
    }

  }

  goBack() {
    this.location.back();
  }
}
