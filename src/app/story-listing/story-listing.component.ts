import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { IStoryData } from '../story.types';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-story-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-listing.component.html',
  styleUrl: './story-listing.component.css',
})
export class StoryListingComponent implements OnInit,OnDestroy{
  constructor(private storyService: StoryService) {}
  stories: IStoryData[] = [];
  storiesSubscription!: Subscription;

  ngOnInit(): void {
    this.storiesSubscription = this.storyService.stories$.subscribe({
      next: (res) => {
        if (res) {
          this.stories = res;
        }
      },
    });
  }
  
  ngOnDestroy(): void {
      this.storiesSubscription.unsubscribe()
  }
}
