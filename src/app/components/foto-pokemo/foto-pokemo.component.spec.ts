import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPokemoComponent } from './foto-pokemo.component';

describe('FotoPokemoComponent', () => {
  let component: FotoPokemoComponent;
  let fixture: ComponentFixture<FotoPokemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoPokemoComponent]
    });
    fixture = TestBed.createComponent(FotoPokemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
