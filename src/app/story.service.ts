import { Injectable } from '@angular/core';
import { IStoryData } from './story.types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private _stories = new BehaviorSubject<IStoryData[]>([]);
  stories$ = this._stories.asObservable();

  stories: IStoryData[] = [...this.getMockData];
  constructor() {}

  addStories(story: IStoryData) {
    if (!this.isDuplicate(story)) {
      this.stories.push(story);
      this._stories.next(this.stories);
    }
  }

  isDuplicate(story: IStoryData) {
    const index = this.stories.findIndex((s) => s.name === story.name);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  clearStories() {
    this._stories.next([]);
  }

  getStories() {
    return this._stories.getValue();
  }

  get getMockData() {
    return [
      { name: 'qw', point: 2 },
      { name: 'aw', point: 1 },
      { name: 'rw', point: 1 },
      { name: 'yw', point: 1 },
      { name: 'uw', point: 4 },
      { name: 'tw', point: 2 },
      { name: 'gh', point: 7 },
      { name: 'jk', point: 2 },
      { name: 'er', point: 4 },
      { name: 'fgdf', point: 1 },
      { name: 'fgh', point: 8 },
      { name: 'mn', point: 8 },
    ];
  }
}
