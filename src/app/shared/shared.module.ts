import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { ProductsComponent } from './products/products.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
@NgModule({
  declarations: [CarouselComponent, ProductsComponent],
  imports: [CommonModule, CarouselModule, ScrollPanelModule],
  exports: [CarouselComponent, ProductsComponent],
})
export class SharedModule {}
