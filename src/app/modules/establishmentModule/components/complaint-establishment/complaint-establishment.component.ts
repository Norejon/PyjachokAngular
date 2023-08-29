import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ComplaintService} from "../../../../services/complaint.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-complaint-establishment',
  templateUrl: './complaint-establishment.component.html',
  styleUrls: ['./complaint-establishment.component.css']
})
export class ComplaintEstablishmentComponent {
form:FormGroup;

constructor(private route:ActivatedRoute, private complaintService:ComplaintService,private location: Location) {
  this.form = new FormGroup({
    text: new FormControl()
  });
}
  complaint() {
    const id = this.route.snapshot.paramMap.get('id');
    const text = this.form.value.text;
    this.complaintService.complaint(Number(id), text).subscribe(
      (response) => {
        console.log('Успішно додано', response);
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
