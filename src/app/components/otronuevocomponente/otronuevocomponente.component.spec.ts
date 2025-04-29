import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtronuevocomponenteComponent } from './otronuevocomponente.component';

describe('OtronuevocomponenteComponent', () => {
  let component: OtronuevocomponenteComponent;
  let fixture: ComponentFixture<OtronuevocomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtronuevocomponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtronuevocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
