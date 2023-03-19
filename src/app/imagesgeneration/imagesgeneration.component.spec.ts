import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesgenerationComponent } from './imagesgeneration.component';

describe('ImagesgenerationComponent', () => {
  let component: ImagesgenerationComponent;
  let fixture: ComponentFixture<ImagesgenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesgenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
