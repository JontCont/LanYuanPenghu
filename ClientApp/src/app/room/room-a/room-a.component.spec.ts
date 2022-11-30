import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAComponent } from './room-a.component';

describe('RoomAComponent', () => {
  let component: RoomAComponent;
  let fixture: ComponentFixture<RoomAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
