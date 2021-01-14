import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileannotateComponent } from './fileannotate.component';

describe('FileannotateComponent', () => {
  let component: FileannotateComponent;
  let fixture: ComponentFixture<FileannotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileannotateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileannotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
