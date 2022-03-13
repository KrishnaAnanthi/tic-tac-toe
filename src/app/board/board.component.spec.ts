import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call newGame()', () => {
    const spy = spyOn(component, 'newGame').and.returnValue(undefined);
    expect(component.newGame()).toBeUndefined();
    expect(component.newGame).toHaveBeenCalled();
    expect(component.newGame).toHaveBeenCalledTimes(1);
  });

  it('after newGame() function call, boxes should be empty ', () => {
    component.newGame();
    component.boxes.every((element) => {
      expect(element).toBeNull();
    });
  });

  it('calculateWinner() should be called', () => {
    const spy = spyOn(component, 'calculateWinner').and.returnValue(undefined);
    expect(component.calculateWinner()).toBeUndefined();
    expect(component.calculateWinner).toHaveBeenCalled();
    expect(component.calculateWinner).toHaveBeenCalledTimes(1);
  });

  it('calculateWinner() - when player X win the game', () => {
    component.boxes = ['X', 'X', 'X', 'O', 'O', '', '', '', ''];
    const winner = component.calculateWinner();
    expect(winner).toBe('X');
  });

  it('calculateWinner() - when player O win the game', () => {
    component.boxes = ['X', 'X', 'O', 'O', 'O', 'O', 'X', 'X', ''];
    const winner = component.calculateWinner();
    expect(winner).toBe('O');
  });

  it('calculateWinner() - when the game is draw', () => {
    component.boxes = ['X', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'O'];
    const winner = component.calculateWinner();
    expect(winner).toBe(null);
  });
});
