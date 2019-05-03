import { Component, OnInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TechStoreState } from 'src/stores/IMS/techStore.state';
import { TechItem } from 'src/shared/models/techItem.model';
import { techStroeActions } from 'src/stores/IMS/techStore.actions';

@Component({
  selector: 'app-tech-store',
  templateUrl: './tech-store.component.html',
  styleUrls: ['./tech-store.component.scss']
})
export class TechStoreComponent implements OnInit {

  techItems$: Observable<TechItem[]>;
  newItem: TechItem;
  operation: string;
  
  constructor(
    private techStroe: Store<{ techStore: TechStoreState }>,
    public dialog: MatDialog) {
    this.techItems$ = this.techStroe
      .select('techStore')
      .pipe(map(techStroeState => techStroeState.items))
    this.newItem = {
      value: null,
      quantity: null,
      name: ''
    }

  }
  ngOnInit() {
  }




  openDialog(formElem, operation): void {
    this.operation = operation;
    const dialogRef = this.dialog.open(formElem, {
      width: '35%'
    });

  }

  operateItem() {
    if (this.operation == 'remove')
      this.techStroe.dispatch({ type: techStroeActions.Remove_Item, payload: this.newItem })
    else if (this.operation == 'add')
      this.techStroe.dispatch({ type: techStroeActions.Add_Item, payload: this.newItem })
    else
      this.techStroe.dispatch({ type: techStroeActions.Return_Item, payload: this.newItem })

    this.newItem = {
      value: null,
      quantity: null,
      name: ''
    }
  }


}
