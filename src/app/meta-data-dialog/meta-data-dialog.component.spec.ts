import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDataDialogComponent } from './meta-data-dialog.component';

describe('MetaDataDialogComponent', () => {
  let component: MetaDataDialogComponent;
  let fixture: ComponentFixture<MetaDataDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetaDataDialogComponent]
    });
    fixture = TestBed.createComponent(MetaDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
