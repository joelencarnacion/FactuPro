import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { DataService } from 'src/app/core/core.index';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { pos } from 'src/app/shared/model/page.model';
interface data {
  value: string;
}
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class PosComponent {
  public selectedValue1 = ''
  public selectedValue2 = ''
  public selectedValue3 = ''
  public selectedValue4 = ''
  public selectedValue5 = ''

  selectedList1: data[] = [
    { value: 'Walk-in Customer' },
    { value: 'Chris Moris' },
  ];
  selectedList2: data[] = [{ value: 'Product' }, { value: 'Barcode' }];
  selectedList3: data[] = [{ value: 'Exclusive' }, { value: 'Inclusive' }];
  selectedList4: data[] = [{ value: 'Fixed' }, { value: 'Percentage' }];
  selectedList5: data[] = [{ value: 'Kilogram' }, { value: 'Grams' }];
  public delete = [];
  public posPurchase : pos[] =[]
  public posPayment: pos[] = [];
  public posReturn: pos[] = [];
  public cartValue = [0, 0, 0, 0];
  public activeClassIndex = 0;

  customOptions: OwlOptions = {
    margin: 10,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    loop: false,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 8,
      },
      1170: {
        items: 8,
      },
    },
  };

  constructor(private data: DataService,private sweetlalert: SweetalertService) {
    this.data.getPos1().subscribe((res) => {
      this.delete = res.data;
      this.posPurchase = res.data;
    });
    this.data.getPos2().subscribe((res) => {
      this.posPayment = res.data;
    });
    this.data.getPos3().subscribe((res) => {
      this.posReturn = res.data;
    });
  }

  public addPos(i: number): void {
    this.cartValue[i]++;
  }
  public reducePos(i: number): void {
    this.cartValue[i]--;
  }



   
  public sortPosPurchaseData(sort: Sort) {
    const data = this.posPurchase.slice();

    if (!sort.active || sort.direction === '') {
      this.posPurchase = data;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.posPurchase = data.sort((a: any, b: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public sortPosPaymentData(sort: Sort) {
    const data = this.posPayment.slice();

    if (!sort.active || sort.direction === '') {
      this.posPayment = data;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.posPayment = data.sort((a: any, b: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public sortPosReturnData(sort: Sort) {
    const data = this.posReturn.slice();

    if (!sort.active || sort.direction === '') {
      this.posReturn = data;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.posReturn = data.sort((a: any, b: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  addClass(index: number) {
    this.activeClassIndex = index;
  }
  deleteBtn() {
    this.sweetlalert.deleteBtn();
  }

}
