import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStoreComponent } from './tech-store.component';

describe('TechStoreComponent', () => {
  let component: TechStoreComponent;
  let fixture: ComponentFixture<TechStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
