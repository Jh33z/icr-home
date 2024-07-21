import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { DetailsComponent } from './details/details.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
  declarations: [CatalogComponent, DetailsComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    DropdownModule,
    FormsModule,
    SharedModule,
    CardModule,
    PaginatorModule,
    ButtonModule,
    InputNumberModule,
  ],
})
export class CatalogModule {}
