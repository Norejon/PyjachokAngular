import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  constructor(private route: ActivatedRoute, private router: Router) {}

  getParams(): any {
    return this.route.snapshot.queryParams;
  }

  setParams(params: any): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    });
  }
}
