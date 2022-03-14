import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmailComponent } from './listar-email.component';

describe('ListarEmailComponent', () => {
  let component: ListarEmailComponent;
  let fixture: ComponentFixture<ListarEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
