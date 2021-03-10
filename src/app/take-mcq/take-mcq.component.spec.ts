import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeMcqComponent } from './take-mcq.component';

describe('TakeMcqComponent', () => {
  let component: TakeMcqComponent;
  let fixture: ComponentFixture<TakeMcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeMcqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
