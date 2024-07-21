import { Component, OnInit } from '@angular/core';
import { ICarousel, IProduct } from 'src/app/interfaces/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}
  carouselData1: ICarousel[] = [];
  carouselData2: ICarousel[] = [];
  logoData: ICarousel[] = [];
  products1!: IProduct[];
  blogData: any[] = [];
  ngOnInit(): void {
    this.carouselData1 = this.dataService.carouselData;
    this.logoData = this.dataService.logoData;
    this.carouselData2 = this.dataService.carousel2Data;
    this.products1 = this.dataService.productArr1;
    this.blogData = this.dataService.blogData;
  }
}
