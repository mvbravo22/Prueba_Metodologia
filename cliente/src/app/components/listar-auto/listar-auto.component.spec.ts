import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAutoComponent } from './listar-auto.component';

describe('ListarAutoComponent', () => {
  let component: ListarAutoComponent;
  let fixture: ComponentFixture<ListarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
