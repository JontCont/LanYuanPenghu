import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBComponent } from './room-b.component';

describe('RoomBComponent', () => {
  let component: RoomBComponent;
  let fixture: ComponentFixture<RoomBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
