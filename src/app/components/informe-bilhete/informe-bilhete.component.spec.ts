import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeBilheteComponent } from './informe-bilhete.component';

describe('InformeBilheteComponent', () => {
  let component: InformeBilheteComponent;
  let fixture: ComponentFixture<InformeBilheteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeBilheteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
