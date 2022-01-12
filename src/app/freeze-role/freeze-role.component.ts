import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FreezedModelComponent } from '../freezed-model/freezed-model.component';

@Component({
  selector: 'app-freeze-role',
  templateUrl: './freeze-role.component.html',
  styleUrls: ['./freeze-role.component.scss']
})
export class FreezeRoleComponent implements OnInit {
  freezeGroup:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data,private fb:FormBuilder,public dialogRef: MatDialogRef<FreezeRoleComponent>,public dialog: MatDialog) {
    console.log("this.data",this.data)
    this.freezeGroup = this.fb.group({
      "dropDown": ['',Validators.required],
      "description": ['',Validators.required],
    })
   }

  

  ngOnInit(): void {
  }
  freezeSubmit(){
 console.log(this.freezeGroup.value)
      this.dialogRef.close()
      if(this.data=='customer'){
        const dialogRef = this.dialog.open(FreezedModelComponent,{
          width:"30%",
          data:this.data
         });
         dialogRef.afterClosed().subscribe(result => {
           console.log(`Dialog result: ${result}`);
         });
       }
       if(this.data=='partner'){
        const dialogRef = this.dialog.open(FreezedModelComponent,{
          width:"30%",
          data:this.data
         });
         dialogRef.afterClosed().subscribe(result => {
           console.log(`Dialog result: ${result}`);
         });
       }
       if(this.data=='offer'){
        const dialogRef = this.dialog.open(FreezedModelComponent,{
          width:"30%",
          data:this.data
         });
         dialogRef.afterClosed().subscribe(result => {
           console.log(`Dialog result: ${result}`);
         });
       }
       if(this.data=='offer'){
        const dialogRef = this.dialog.open(FreezedModelComponent,{
          width:"30%",
          data:this.data
         });
         dialogRef.afterClosed().subscribe(result => {
           console.log(`Dialog result: ${result}`);
         });
       }
       if(this.data=='purchasersOrder'){
        const dialogRef = this.dialog.open(FreezedModelComponent,{
          width:"30%",
          data:this.data
         });
         dialogRef.afterClosed().subscribe(result => {
           console.log(`Dialog result: ${result}`);
         });
       }
  }
  close(){
    this.dialogRef.close()
  }


   
}
