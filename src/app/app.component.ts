import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MetaDataDialogComponent } from './meta-data-dialog/meta-data-dialog.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface MetaData {
  label: string,
  name: string,
  type: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-form';
  formFieldMetaData: MetaData[] = [];
  dynamicForm: FormGroup;

  constructor(
    private _dialog: MatDialog,
    private _formBuilder: FormBuilder
  ) {
    this.dynamicForm = this._formBuilder.group({});
  }

  ngOnInit(): void {

  }

  formControlsHasErr(name: string): boolean{ 
    return this.dynamicForm.get(name)?.invalid || true;
  }

  openMetaDataDialog(): void {
    const dialogRef = this._dialog.open(MetaDataDialogComponent, {
      panelClass: 'dialog'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.formFieldMetaData.push(result.field);
        this.buildDynamicForm(this.formFieldMetaData);
      }
    })
  }

  private buildDynamicForm(metaData: MetaData[]): void {
    metaData.forEach((field) => {
      this.dynamicForm.addControl(
        field.name,
        this._formBuilder.control(null, [Validators.required])
      );
    });
  }

  onFormSubmit() { 
    console.log(this.dynamicForm.value, this.formFieldMetaData);
  }
}
