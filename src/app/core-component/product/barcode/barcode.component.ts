import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss'],
})
export class BarcodeComponent {
  public selectedValue1 = '';
  selectedList1: data[] = [
    { value: '36mm (1.4 inch)' },
    { value: '12mm (1 inch)' },
  ];
  public tableData = [
    {
      Name: 'Macbook pro',
      SKU: 'PT001',
      Qty: '100.00',
    },
    {
      Name: 'Apple Earpods',
      SKU: 'PT002',
      Qty: '1000.00',
    },
    {
      Name: 'Macbook Pro',
      SKU: 'PT003',
      Qty: '5000.00',
    },
  ];

  delete(index: number) {
    this.tableData.splice(index, 1);
  }
}
