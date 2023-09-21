import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-meta-data-dialog',
  templateUrl: './meta-data-dialog.component.html',
  styleUrls: ['./meta-data-dialog.component.scss']
})
export class MetaDataDialogComponent {
  metaDataForm: FormGroup;
  constructor(
    private _dialogRef: MatDialogRef<MetaDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private _formBuilder: FormBuilder
  ) {
    this.metaDataForm = this._formBuilder.group({
      name: [null, [Validators.required]],
      label: [null, [Validators.required]],
      type: ["text", [Validators.required]]
    });
  }

  onFormSubmit(): void {
    console.log(this.metaDataForm, "test");
    
    if (this.metaDataForm.invalid)
      return;

    this._dialogRef.close({ field: this.metaDataForm.value });
  }

}
