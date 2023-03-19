import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textdavinciedit001Component } from './textdavinciedit001.component';

describe('Textdavinciedit001Component', () => {
  let component: Textdavinciedit001Component;
  let fixture: ComponentFixture<Textdavinciedit001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textdavinciedit001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textdavinciedit001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
