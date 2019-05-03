import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStoreComponent } from './tech-store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { Reducer } from 'src/stores/IMS/techStore.reducer';
import { TechStoreState } from 'src/stores/IMS/techStore.state';

describe('TechStoreComponent', () => {
  let component: TechStoreComponent;
  let fixture: ComponentFixture<TechStoreComponent>;
  let store: Store<{ techStore: TechStoreState }>

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

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
});
