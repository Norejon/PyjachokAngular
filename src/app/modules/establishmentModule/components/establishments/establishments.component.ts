import {Component, OnInit} from '@angular/core';
import {EstablishmentService} from "../../../../services/establishment.service";
import {IEstablishment} from "../../../../interfaces";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.css']
})
export class EstablishmentsComponent implements OnInit {
  establishments: IEstablishment[];
  initialEstablishments: IEstablishment[];
  form: FormGroup;
  form2:FormGroup;
  currentPage = 1;
  isFilterOpen: boolean = false;

  tags: string[] = ['Безкоштовна парковка', 'Вайфай', 'Оплата криптовалютою', 'Веганське меню', 'Святкування'];

  constructor(
    private establishmentService: EstablishmentService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this._initForm();
    this._initForm2();
    this.establishmentService.getActivated().subscribe((value) => {
      this.establishments = value;
      this.initialEstablishments = value;
      this.filter();
    });
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.form.patchValue(queryParams);
      this.filter();
    });
  }

  get tagsFormArray() {
    return this.form.get('tags') as FormArray;
  }

  private _initForm(): void {
    this.form = this.formBuilder.group({
      rating: new FormControl(),
      type: new FormControl(),
      tags: this.buildTagsFormGroup(),
    });
  }
  private _initForm2(): void {
    this.form2 = this.formBuilder.group({
      rating: new FormControl(),
      type: new FormControl(),
      tags: this.route.snapshot.queryParams,

    });
  }
  private buildTagsFormGroup() {
    const group = this.formBuilder.group({});
    this.tags.forEach((tag) => {
      group.addControl(tag, new FormControl(false));
    });
    return group;
  }

  toggleFilter(): void {
    this.isFilterOpen = !this.isFilterOpen;
  }


  filterForm(): void {
    if (!this.form || !this.initialEstablishments) {
      return;
    }
    const filters = this.form.value;
    const tags = Object.keys(this.form.controls['tags'].value).filter((key) => this.form.controls['tags'].value[key]);
    const filteredEstablishments = this.initialEstablishments.filter(
      (establishment: IEstablishment) => {
        if (filters.rating && establishment.rating !== +filters.rating) {
          return false;
        }
        if (filters.type && establishment.type !== filters.type) {
          return false;
        }
        if (filters.tags && tags.length > 0) {
          const establishmentTags: string[] = establishment.tags || [];
          return tags.every((tag: string) => establishmentTags.includes(tag));
        }
        return true;
      }
    );

    this.establishments = filteredEstablishments;
  }

  filter(): void {

    if (!this.form2 || !this.initialEstablishments) {
      return;
    }

    const tags = this.form2.value.tags.tags;
    const filteredEstablishments = this.initialEstablishments.filter(
      (establishment: IEstablishment) => {
        if (tags && tags.length > 0) {
          const establishmentTags: string[] = establishment.tags || [];
          return tags.every((tag: string) => establishmentTags.includes(tag));
        }
        return true;
      }
    );

    this.establishments = filteredEstablishments;
  }


  handleInput(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();

    const filteredEstablishments = this.initialEstablishments.filter(
      (establishment: IEstablishment) => {
        return establishment.name.toLowerCase().includes(searchTerm);
      }
    );

    this.establishments = filteredEstablishments;
  }
  changePage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
}
