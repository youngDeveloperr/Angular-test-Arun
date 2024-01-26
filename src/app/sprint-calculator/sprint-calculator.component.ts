import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoryService } from '../story.service';
import { IStoryData } from '../story.types';
import { AutoSelectedStoriesComponent } from './auto-selected-stories/auto-selected-stories.component';
import { Subscription } from 'rxjs';
const DEFAULT_DATA: IStoryData = { name: '', point: 0 };
@Component({
  selector: 'app-sprint-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, AutoSelectedStoriesComponent],
  templateUrl: './sprint-calculator.component.html',
  styleUrl: './sprint-calculator.component.css',
})
export class SprintCalculatorComponent implements OnInit, OnDestroy {
  sprintPoint: number | undefined;
  selectedStories: IStoryData[] = [];
  storiesSubscription!: Subscription;
  stories: IStoryData[] = [];

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.storiesSubscription = this.storyService.stories$.subscribe({
      next: (res) => {
        if (res) {
          this.stories = [...res];
        }
      },
    });
  }

  autoSelectStories() {
    if (!this.sprintPoint) {
      return;
    }
    this.selectedStories = [];

    this.stories.sort((a, b) => b.point - a.point);

    // If we need to occupie maximum story point
    let totalPoints = 0;

    this.stories.forEach((story) => {
      if (totalPoints + story.point <= this.sprintPoint!) {
        this.selectedStories.push(story);
        totalPoints = totalPoints + story.point;
      }
    });

    // If we need to occupie maximum no of stories
    // this.stories.forEach((story) => {
    //   if (story.point <= this.sprintPoint!) {
    //     this.selectedStories.push(story);
    //   }
    // });
  }

  clearStories() {
    if (this.stories.length == 0) {
      return;
    }
    this.storyService.clearStories();
  }

  clearSprints() {
    if (this.selectedStories.length == 0) {
      return;
    }
    this.selectedStories = [];
    this.sprintPoint = undefined;
  }

  ngOnDestroy(): void {
    this.storiesSubscription.unsubscribe();
  }
}
