import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPmComponent } from './board-pm.component';

describe('BoardPmComponent', () => {
  let component: BoardPmComponent;
  let fixture: ComponentFixture<BoardPmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardPmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
