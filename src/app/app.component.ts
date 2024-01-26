import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListingComponent } from './story-listing/story-listing.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { IStoryData } from './story.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StoryFormComponent,
    StoryListingComponent,
    SprintCalculatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sprint-planner';
}
