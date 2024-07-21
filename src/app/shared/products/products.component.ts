import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IDetails } from 'src/app/interfaces/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private dataService: DataService, private route: Router) {}
  @Input() data!: IDetails[];
  @Input() title!: string;

  onDetails(product: IDetails) {
    this.dataService.details$.next(product);
    this.route.navigate(['/catalog/products'], {
      queryParams: { product: product.id },
    });
  }
}
