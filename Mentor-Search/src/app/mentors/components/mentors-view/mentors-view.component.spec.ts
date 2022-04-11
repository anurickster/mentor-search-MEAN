import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsViewComponent } from './mentors-view.component';

describe('MentorsViewComponent', () => {
  let component: MentorsViewComponent;
  let fixture: ComponentFixture<MentorsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
