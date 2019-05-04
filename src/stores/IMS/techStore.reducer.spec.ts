import { async, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { Reducer } from 'src/stores/IMS/techStore.reducer';
import { TechStoreState } from 'src/stores/IMS/techStore.state';
import { techStroeActions } from './techStore.actions';

describe('Reducer', () => {

  let store: Store<{ techStore: TechStoreState }>
  let payload = {name: 'G', value: 4, quantity: 5};

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

  it('should have the new item to be added', () => {
    const state = { items: [] };
    const action = { type: techStroeActions.Add_Item, payload };
    expect(Reducer(state, action)).toEqual({items: [ payload ]});
  });

  it('should have the new item to be removed', () => { 
    const state = { items: [ payload ] };
    const action = { type: techStroeActions.Remove_Item, payload };
    expect(Reducer(state, action)).toEqual({items: [ ]});
  });

  it('should have the item to be updated', () => { 
    payload = {name: 'G', value: 4, quantity: 5};
    const state = { items: [ payload ] };
    const action = { type: techStroeActions.Return_Item, payload };

    expect(Reducer(state, action)).toEqual({items: [ { ...payload, quantity: 10 } ]});
  });

  
});
