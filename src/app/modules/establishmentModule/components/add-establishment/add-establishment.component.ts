import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EstablishmentService} from "../../../../services/establishment.service";


@Component({
  selector: 'app-add-establishment',
  templateUrl: './add-establishment.component.html',
  styleUrls: ['./add-establishment.component.css']
})
export class AddEstablishmentComponent implements OnInit {
  form: FormGroup;
  selectedImage: File;
  tags: string[] = ['Безкоштовна парковка', 'Вайфай', 'Оплата криптовалютою', 'Веганське меню', 'Святкування'];

  constructor(private formBuilder: FormBuilder, private establishmentService: EstablishmentService) {}

  ngOnInit() {


    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      midle_check: ['', Validators.required],
      location: ['', Validators.required],
      schedule: ['', Validators.required],
      tags: this.buildTagsFormGroup(),
      website: [''],
      email: [''],
      phone: [''],
      telegram: [''],
      instagram: [''],
      others: [''],
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
    if (this.form.valid && this.selectedImage) {
      const name = this.form.controls['name'].value;
      const type = this.form.controls['type'].value;
      const midle_check = this.form.controls['midle_check'].value;
      const location = this.form.controls['location'].value;
      const schedule = this.form.controls['schedule'].value;
      const tags = Object.keys(this.form.controls['tags'].value).filter((key) => this.form.controls['tags'].value[key]);
      const website = this.form.controls['website'].value;
      const email = this.form.controls['email'].value;
      const phone = this.form.controls['phone'].value;
      const telegram = this.form.controls['telegram'].value;
      const instagram = this.form.controls['instagram'].value;
      const others = this.form.controls['others'].value;

      const contacts = { website, email, phone, telegram, instagram, others }

      this.establishmentService.addEstablishment(name, type, midle_check, location, schedule, tags, contacts).subscribe(
        (response) => {
          console.log('Успішно додано', response);
        },
        (error) => {
          console.error('Помилка додавання', error);
        }
      );
      if (this.selectedImage) {
        const formData = new FormData();
        formData.append('file', this.selectedImage, this.selectedImage.name);
        console.log(formData.getAll('file'));
        this.establishmentService.saveImage(formData).subscribe(
          (response) => {
            console.log('Успішно додано', response);
          },
          (error) => {
            console.error('Помилка додавання', error);
          }
        );
      }
    }
  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage);
  }
}
