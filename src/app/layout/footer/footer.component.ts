import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private dataSerive: DataService) {}
  footerData: any[] = [];
  ngOnInit(): void {
    this.footerData = this.dataSerive.footerData;
  }
}
