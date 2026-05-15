import { ComponentFixture, TestBed } from '@angular/core/testing';


import { DesarrolloPages } from './desarrollo';

describe('Desarrollo', () => {
  let component: DesarrolloPages;
  let fixture: ComponentFixture<DesarrolloPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesarrolloPages],
    }).compileComponents();

    fixture = TestBed.createComponent(DesarrolloPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
