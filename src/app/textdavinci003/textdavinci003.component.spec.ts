import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textdavinci003Component } from './textdavinci003.component';

describe('Textdavinci003Component', () => {
  let component: Textdavinci003Component;
  let fixture: ComponentFixture<Textdavinci003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textdavinci003Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textdavinci003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
