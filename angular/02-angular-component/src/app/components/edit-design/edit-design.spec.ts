import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesign } from './edit-design';

describe('EditDesign', () => {
  let component: EditDesign;
  let fixture: ComponentFixture<EditDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDesign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
