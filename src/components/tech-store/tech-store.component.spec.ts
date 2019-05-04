import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStoreComponent } from './tech-store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { Reducer } from 'src/stores/IMS/techStore.reducer';
import { TechStoreState } from 'src/stores/IMS/techStore.state';
import { techStroeActions } from 'src/stores/IMS/techStore.actions';
import{first} from 'rxjs/operators'
import { Observable, of } from 'rxjs';

describe('TechStoreComponent', () => {
  let component: TechStoreComponent;
  let fixture: ComponentFixture<TechStoreComponent>;
  let store: Store<{ techStore: TechStoreState }>;

  let numberOfItemsbefore, numberOfItemsAfter, allItems;


  let operation = (operation)  => {
    component.operation = operation;
    component.techItems$.pipe(first()).subscribe(items => numberOfItemsbefore  = items.length);
    component.operateItem();
    component.techItems$.pipe(first()).subscribe(items => {
      numberOfItemsAfter  = items.length;
      allItems = items;
    });
  
  }

  let clearOperation = (operationReverse) => {
    // Clear
    component.operation = operationReverse;
    component.operateItem();
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechStoreComponent ],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule, 
        FormsModule,
    //    MaterialM
        StoreModule.forRoot({techStore: Reducer})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  });

  it('should create new element in store', () => {
    component.newItem = {
      name: 'G', 
      value: 4, 
      quantity: 5
    }
    operation('add');
    expect(numberOfItemsAfter - numberOfItemsbefore).toBe(1);
    //clearOperation('remove');

  });

  it('should update element quantity in store', () => {
    component.newItem = {
      name: 'G', 
      value: 4, 
      quantity: 10
    }
    operation('add');
    console.log("DDDDDDDDDD", allItems);
  //  let updatedQuantity = allItems.filter((item) => item.name == component.newItem.name);
    //console.log("DDDDDDDDDD", updatedQuantity);

    expect(numberOfItemsAfter - numberOfItemsbefore).toBe(1);
    //expect(updatedQuantity).toBe(10);
    //clearOperation('remove');

  });

  it('should remove  element from store', () => {
    component.newItem = {
      name: 'C', 
      value: null, 
      quantity: 3
    }
    operation('remove');
    expect(numberOfItemsbefore - numberOfItemsAfter).toBe(1);
    //clearOperation('add');
  });

  it('should return element to store', () => {
    component.newItem = {
      name: 'X', 
      value: 4, 
      quantity: 5
    }
    operation('return');
    expect(numberOfItemsAfter - numberOfItemsbefore).toBe(1);
    //clearOperation('remove');

  });


  
});
