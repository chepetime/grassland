import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrasslandLibComponent } from './grassland-lib.component';

describe('GrasslandLibComponent', () => {
  let component: GrasslandLibComponent;
  let fixture: ComponentFixture<GrasslandLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrasslandLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrasslandLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
