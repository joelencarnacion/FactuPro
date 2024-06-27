import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  apiResultFormat,
  DataService,
  pageSelection,
  routes,
} from 'src/app/core/core.index';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { Router } from '@angular/router';
import { productList } from 'src/app/shared/model/page.model';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductosI, ResponseI } from 'src/app/interfaces/allinterfaces';
import { alertRemoveSure, successMessageAlert } from 'src/app/core/helpers/alert';
interface data {
  value: string;
}
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
  initChecked = false;
  public tableData: Array<productList> = [];
  public routes = routes;
  public selectedValue1 = ''
  public selectedValue2 = ''
  public selectedValue3 = ''
  public selectedValue4 = ''
  public selectedValue5 = ''
  productosList: Array<ProductosI> = [];
  selectedList1: data[] = [
    { value: 'Choose Sub Category' },
    { value: 'Fruits' },
  ];
  selectedList2: data[] = [
    { value: 'Choose Product' },
    { value: 'Macbook pro' },
    { value: 'Orange' },
  ];
  selectedList3: data[] = [{ value: 'Brand' }, { value: 'N/D' }];
  selectedList4: data[] = [{ value: 'Price' }, { value: '150.00' }];
  selectedList5: data[] = [{ value: 'Price' }, { value: '150.00' }];
  // pagination variables
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<productList>;
  public searchDataValue = '';
  //** / pagination variables

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private sweetlalert: SweetalertService,
    private router: Router,
    private productoService: ProductosService
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.productList) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  ngOnInit(): void {
    this.getProductos();
  }
  getProductos() {
    this.productoService.getProductos().subscribe((resp: ResponseI) => {
      this.productosList = resp.data;
      console.log(this.productosList);
    })
  }

  deleteBtn() {
    this.sweetlalert.deleteBtn();
  }
  async deleteProducto(producto: ProductosI) {
    let remove: boolean = await alertRemoveSure("Estas seguro que deseas eliminar este producto?")
    if (remove) {
      this.productoService.deleteProductos(producto.id!)
        .subscribe((resp: ResponseI) => {
          successMessageAlert("Operacion realizada");
          this.getProductos();
        })
    }
  }


  private getTableData(pageOption: pageSelection): void {
    this.data.getProductList().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: productList, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<productList>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
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
