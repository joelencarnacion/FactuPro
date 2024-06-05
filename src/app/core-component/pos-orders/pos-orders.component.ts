import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { productList } from 'src/app/shared/model/page.model';

@Component({
  selector: 'app-pos-orders',
  templateUrl: './pos-orders.component.html',
  styleUrls: ['./pos-orders.component.scss']
})
export class PosOrdersComponent {
  public searchDataValue = '';
  public tableData: Array<productList> = [];
  dataSource!: MatTableDataSource<productList>;
  showFilter = false;

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }

}
