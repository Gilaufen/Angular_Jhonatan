import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPokemoComponent } from './tarjeta-pokemo.component';

describe('TarjetaPokemoComponent', () => {
  let component: TarjetaPokemoComponent;
  let fixture: ComponentFixture<TarjetaPokemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaPokemoComponent]
    });
    fixture = TestBed.createComponent(TarjetaPokemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
