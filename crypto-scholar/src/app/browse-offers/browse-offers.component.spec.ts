import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseOffersComponent } from './browse-offers.component';

describe('BrowseOffersComponent', () => {
  let component: BrowseOffersComponent;
  let fixture: ComponentFixture<BrowseOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
