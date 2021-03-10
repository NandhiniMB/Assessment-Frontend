import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMcqComponent } from './create-mcq.component';

describe('CreateMcqComponent', () => {
  let component: CreateMcqComponent;
  let fixture: ComponentFixture<CreateMcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMcqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
