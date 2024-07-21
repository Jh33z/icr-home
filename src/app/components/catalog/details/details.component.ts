import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { IDetails } from 'src/app/interfaces/data.model';
import { CatalogService } from 'src/app/services/catalog.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  constructor(
    private dataService: DataService,
    private catalogService: CatalogService
  ) {}
  details!: Observable<IDetails>;
  value: number = 1;
  toFavNum: number = 1;
  toListNum: number = 1;
  ngOnInit(): void {
    this.details = this.dataService.details$.pipe(take(1));
  }
  addToFav() {
    this.catalogService.addToFav$.next(this.toFavNum++);
  }
  addToList() {
    this.catalogService.addToFavList$.next(this.toListNum++);
  }
  ngOnDestroy(): void {}
}
