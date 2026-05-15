import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFrutas } from './card-frutas';

describe('CardFrutas', () => {
  let component: CardFrutas;
  let fixture: ComponentFixture<CardFrutas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFrutas],
    }).compileComponents();

    fixture = TestBed.createComponent(CardFrutas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
