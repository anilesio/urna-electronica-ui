import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarVotoComponent } from './registar-voto.component';

describe('RegistarVotoComponent', () => {
  let component: RegistarVotoComponent;
  let fixture: ComponentFixture<RegistarVotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarVotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
