import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EstablishmentService} from "../../../services/establishment.service";
import {IEstablishment, IUser} from "../../../interfaces";
import {AuthService} from "../../../services/auth.service";
import {AnaliticService} from "../../../services/analitic.service";
import {Location} from "@angular/common";
import {UrlService} from "../../../services/url.service";

@Component({
  selector: 'app-establishment-details-owner',
  templateUrl: './establishment-details-owner.component.html',
  styleUrls: ['./establishment-details-owner.component.css']
})
export class EstablishmentDetailsOwnerComponent implements OnInit{
  establishment: IEstablishment;
  user: IUser;
  isInFavorite: boolean;
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private establishmentService: EstablishmentService,
    private authService: AuthService,
    private analiticService: AnaliticService,
    private location: Location,
    private urlService:UrlService,
    private router:Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.authService.me().subscribe((value) => {
      this.user = value;
      this.analiticService.addAnalitic(Number(id), value.nickname, value.gender);
      this.checkIsInFavorite(Number(id));
    });
    if (id) {
      this.establishmentService.getById(Number(id)).subscribe((value) => {
        this.establishment = value;
      });
    }
  }

  addToFavorite() {
    const id = this.route.snapshot.paramMap.get('id');
    this.establishmentService.addToFavorite(Number(id)).subscribe(
      (response) => {
        console.log('Успішно додано', response);
        this.checkIsInFavorite(Number(id));
      },
      (error) => {
        console.error('Помилка додавання', error);
      }
    );
  }

  deleteFromFavorite() {
    const id = this.route.snapshot.paramMap.get('id');
    this.establishmentService.deleteFromFavorite(Number(id)).subscribe(
      (response) => {
        console.log('Успішно видалено з обраних', response);
        this.checkIsInFavorite(Number(id));
      },
      (error) => {
        console.error('Помилка видаленя з обраних', error);
      }
    );
  }

  activate() {
    const id = this.route.snapshot.paramMap.get('id');
    this.establishmentService.activateEstablishment(Number(id)).subscribe(
      (response) => {
        console.log('Успішно активовано', response);
      },
      (error) => {
        console.error('Помилка активування', error);
      }
    );
  }

  desActivate() {
    const id = this.route.snapshot.paramMap.get('id');
    this.establishmentService.desActivateEstablishment(Number(id)).subscribe(
      (response) => {
        console.log('Успішно дезактивовано', response);
      },
      (error) => {
        console.error('Помилка дезактивування', error);
      }
    );
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.establishmentService.deleteEstablishment(Number(id)).subscribe(
        () => {
          console.log('Успішно видалено');
        },
        (error) => {
          console.error('Помилка видалення', error);
        }
      );
    }
  }

  goBack(): void {
    this.location.back();
  }

  checkIsInFavorite(id: number) {
    if (!this.user || !this.user.favorite) {
      this.isInFavorite = false;
      return;
    }

    this.isInFavorite = this.user.favorite.some(
      (establishment) => establishment.id === id
    );
  }

  applyTagFilter(tag: string): void {
    const queryParams: Params = { ...this.route.snapshot.queryParams };
    const tags = queryParams['tags'];

    if (tags) {
      if (Array.isArray(tags)) {
        queryParams['tags'] = tags.filter(t => t === tag);
      } else {
        queryParams['tags'] = [tags].filter(t => t === tag);
      }
    } else {
      queryParams['tags'] = [tag];
    }

    this.router.navigate(['/establishments'], { queryParams });
  }

  confirmDelete(): void {
    this.showConfirm = true;
  }

  hideConfirm(): void {
    this.showConfirm = false;
  }
}
