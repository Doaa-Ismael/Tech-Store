import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { Reducer } from 'src/stores/IMS/techStore.reducer';
import { TechStoreState } from 'src/stores/IMS/techStore.state';

describe('TechStoreComponent', () => {

  let store: Store<{ techStore: TechStoreState }>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        StoreModule.forRoot({techStore: Reducer})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

  });

  it('should create', () => {

  });


  
});
