import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSelectedStoriesComponent } from './auto-selected-stories.component';

describe('AutoSelectedStoriesComponent', () => {
  let component: AutoSelectedStoriesComponent;
  let fixture: ComponentFixture<AutoSelectedStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoSelectedStoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoSelectedStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
