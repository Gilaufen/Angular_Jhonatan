import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePokemoComponent } from './detalle-pokemo.component';

describe('DetallePokemoComponent', () => {
  let component: DetallePokemoComponent;
  let fixture: ComponentFixture<DetallePokemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePokemoComponent]
    });
    fixture = TestBed.createComponent(DetallePokemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
