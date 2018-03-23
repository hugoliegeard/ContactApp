import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterComponent } from './ajouter.component';

describe('AjouterComponent', () => {
  let component: AjouterComponent;
  let fixture: ComponentFixture<AjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
