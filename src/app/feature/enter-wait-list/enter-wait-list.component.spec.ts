import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterWaitListComponent } from './enter-wait-list.component';

describe('EnterWaitListComponent', () => {
  let component: EnterWaitListComponent;
  let fixture: ComponentFixture<EnterWaitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterWaitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterWaitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
