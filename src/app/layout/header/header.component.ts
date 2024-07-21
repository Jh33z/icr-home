import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { INav } from 'src/app/interfaces/data.model';
import { CatalogService } from 'src/app/services/catalog.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private catalogService: CatalogService,
    private route: Router
  ) {}
  navigation: INav[] = [];
  countValForFav$!: Observable<number>;
  countValForFavList$!: Observable<number>;
  ngOnInit(): void {
    this.navigation = this.dataService.navData;
    this.countValForFav$ = this.catalogService.addToFav$;
    this.countValForFavList$ = this.catalogService.addToFavList$;
  }
  navClick(id: number) {
    this.route.navigate(['/catalog'], { queryParams: { category: id } });
  }
}
