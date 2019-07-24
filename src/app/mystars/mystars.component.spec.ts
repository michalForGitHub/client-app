import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystarsComponent } from './mystars.component';

describe('MystarsComponent', () => {
  let component: MystarsComponent;
  let fixture: ComponentFixture<MystarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
