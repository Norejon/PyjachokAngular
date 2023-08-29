import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PyjachokService} from "../../../../services/pyjachok.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-pyjachok-form',
  templateUrl: './pyjachok-form.component.html',
  styleUrls: ['./pyjachok-form.component.css']
})
export class PyjachokFormComponent {

  budget: number;
  countOfPeople: number;
  date: string;
  time: string;
  whoPay: string;
  description: string;
  phone:string;
  form:FormGroup;

  constructor(private pyjachokService:PyjachokService,private route:ActivatedRoute,private location:Location) {
  }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      budget: new FormControl('', [Validators.required]),
      countOfPeople: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      whoPay: new FormControl('', [Validators.required]),
      phone: new FormControl('',[Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  pyjachok() {
    const budget = this.form.controls['budget'].value;
    const countOfPeople = this.form.controls['countOfPeople'].value;
    const date = this.form.controls['date'].value;
    const time = this.form.controls['time'].value;
    const whoPay = this.form.controls['whoPay'].value;
    const description = this.form.controls['description'].value;
    const phone = this.form.controls['description'].value;
    const id = this.route.snapshot.paramMap.get('id');

    this.pyjachokService.drinker(budget, countOfPeople, date, time, whoPay, description,phone,Number(id)).subscribe(
      (response) => {
        console.log('Успішний додано', response);
      },
      (error) => {
        console.error('Помилка додавання', error);
      }
    );
  }
  goBack() {
    this.location.back();
  }
}
