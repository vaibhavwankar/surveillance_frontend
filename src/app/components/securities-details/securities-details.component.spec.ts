import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesDetailsComponent } from './securities-details.component';

describe('SecuritiesDetailsComponent', () => {
  let component: SecuritiesDetailsComponent;
  let fixture: ComponentFixture<SecuritiesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritiesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
