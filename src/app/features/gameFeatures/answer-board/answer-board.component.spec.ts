import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerBoardComponent } from './answer-board.component';

describe('AnswerBoardComponent', () => {
  let component: AnswerBoardComponent;
  let fixture: ComponentFixture<AnswerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
