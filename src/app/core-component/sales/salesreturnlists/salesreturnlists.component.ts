import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { Sort } from '@angular/material/sort';
import { salesreturnLists } from 'src/app/shared/model/page.model';

interface data {
  value: string;
}
@Component({
  selector: 'app-salesreturnlists',
  templateUrl: './salesreturnlists.component.html',
  styleUrls: ['./salesreturnlists.component.scss'],
})
export class SalesreturnlistsComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;
  public selectedValue3 = '' ;

  selectedList1: data[] = [
    {value: 'Choose Customer'},
    {value: 'Customer'},
  ];
  selectedList2: data[] = [
    {value: 'Choose Status'},
    {value: 'Inprogress'},
  ];
  selectedList3: data[] = [
    {value: 'Choose Payment Status'},
    {value: 'Payment Status'},
  ];
  initChecked = false;
  public tableData: Array<salesreturnLists> = [];
  public routes = routes;
  // pagination variables
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<salesreturnLists>;
  public searchDataValue = '';
  //** / pagination variables
  constructor(private data: DataService, private sweetalert: SweetalertService) {
    this.data.getSalesReturnList().subscribe((res) => {
      this.tableData = res.data;
    });
  }
  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  deleteBtn() {
    this.sweetalert.deleteBtn()
  }
  date = new Date();
   
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
  public sortData(sort: Sort) {
    const data = this.tableData.slice();

    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.tableData = data.sort((a: any, b: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
}
