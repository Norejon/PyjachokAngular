import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EstablishmentService} from "../../../services/establishment.service";

@Component({
  selector: 'app-changer',
  templateUrl: './changer.component.html',
  styleUrls: ['./changer.component.css']
})
export class ChangerComponent implements OnInit{
  changerForm: FormGroup;


  constructor(private establishmentService:EstablishmentService) {
  }


  ngOnInit(): void {
    this.changerForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      establishmentId: new FormControl('', Validators.required),
    });
  }

  submitForm() {
if (this.changerForm.valid){
  const userId = this.changerForm.value.userId;
  const establishmentId = this.changerForm.value.establishmentId;

  this.establishmentService.changeOwner(establishmentId,userId).subscribe(
    (response) => {
      console.log('Успішно зміни', response);
    },
    (error) => {
      console.error('Успішно змінено додавання', error);
    }
  );
  this.changerForm.reset();
}
  }
}
