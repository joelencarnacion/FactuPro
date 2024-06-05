import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsReportComponent } from './items-report.component';

describe('ItemsReportComponent', () => {
  let component: ItemsReportComponent;
  let fixture: ComponentFixture<ItemsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
