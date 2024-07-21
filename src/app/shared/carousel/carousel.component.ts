import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() numVisible!: number;
  @Input() numScroll!: number;
  @Input() autoplayInterval: number = 0;
  @Input() imageWidth: string = '1300px';
  @Input() imageHeight: string = '380px';
  @Input() borderRadius: string = '12px';
  responsiveOptions: any[] | undefined;
  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
