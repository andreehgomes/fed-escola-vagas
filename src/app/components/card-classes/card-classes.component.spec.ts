import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClassesComponent } from './card-classes.component';

describe('CardClassesComponent', () => {
  let component: CardClassesComponent;
  let fixture: ComponentFixture<CardClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
