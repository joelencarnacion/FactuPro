import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { productList } from 'src/app/shared/model/page.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  public searchDataValue = '';
  public tableData: Array<productList> = [];
  dataSource!: MatTableDataSource<productList>;
  showFilter = false;

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
}
