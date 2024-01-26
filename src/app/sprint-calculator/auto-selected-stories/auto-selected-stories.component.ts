import { Component, Input } from '@angular/core';
import { IStoryData } from '../../story.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auto-selected-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-selected-stories.component.html',
  styleUrl: './auto-selected-stories.component.css',
})
export class AutoSelectedStoriesComponent {
  @Input() autoSelectedStories: IStoryData[] = [];
}
