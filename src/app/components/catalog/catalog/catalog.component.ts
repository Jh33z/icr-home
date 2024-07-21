import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICatalogDropdownData } from 'src/app/interfaces/catalog.model';
import { ICarousel, IDetails } from 'src/app/interfaces/data.model';
import { CatalogService } from 'src/app/services/catalog.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor(
    private catalogService: CatalogService,
    private dataService: DataService,
    private route: Router
  ) {}
  dropDownData: ICatalogDropdownData[] = [];
  carouselData2: ICarousel[] = [];
  products: IDetails[] = [];
  toggle: boolean = false;

  selectedDropdown: ICatalogDropdownData | undefined;

  ngOnInit(): void {
    this.dropDownData = this.catalogService.dropDownData;
    this.carouselData2 = this.dataService.carousel2Data;
    this.products = this.dataService.products;
  }
  onDetails(prod: IDetails) {
    this.dataService.details$.next(prod);
    this.route.navigate(['/catalog/products'], {
      queryParams: { product: prod.id },
    });
  }
  openDropdown() {
    this.toggle = !this.toggle;
    console.log('t', this.toggle);
  }
  // pagination
  first: number = 0;
  rows: number = 10;
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
