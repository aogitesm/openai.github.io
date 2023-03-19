import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationsComponent } from './moderations.component';

describe('ModerationsComponent', () => {
  let component: ModerationsComponent;
  let fixture: ComponentFixture<ModerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
