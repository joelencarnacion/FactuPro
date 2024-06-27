import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  apiResultFormat,
  DataService,
  pageSelection,
  routes,
} from 'src/app/core/core.index';
import { purchaseReturnList } from 'src/app/shared/model/page.model';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
interface data {
  value: string;
}
@Component({
  selector: 'app-purchasereturnlist',
  templateUrl: './purchasereturnlist.component.html',
  styleUrls: ['./purchasereturnlist.component.scss'],
})
export class PurchasereturnlistComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;

  selectedList1: data[] = [
    {value: 'Choose Supplier'},
    {value: 'Supplier'}
  ];
  selectedList2: data[] = [
    {value: 'Choose Status'},
    {value: 'Inprogress'}
  ];
  initChecked = false;
  public tableData: Array<purchaseReturnList> = [];
  public routes = routes;
  // pagination variables
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<purchaseReturnList>;
  public searchDataValue = '';
  //** / pagination variables
  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private sweetalert: SweetalertService,
    private router: Router
  ) {
    this.data.getPurchaseReturnList().subscribe((res) => {
      this.tableData = res.data;
    });

    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.purchaseReturnList) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getPurchaseReturnList().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: purchaseReturnList, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<purchaseReturnList>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  deleteBtn() {
    this.sweetalert.deleteBtn();
  }

  date = new Date();
   
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
  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
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
}
