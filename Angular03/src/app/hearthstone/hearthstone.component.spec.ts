import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearthstoneComponent } from './hearthstone.component';

describe('HearthstoneComponent', () => {
  let component: HearthstoneComponent;
  let fixture: ComponentFixture<HearthstoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearthstoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearthstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
