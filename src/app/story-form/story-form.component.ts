import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StoryService } from '../story.service';
import { IStoryData } from '../story.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.css',
})
export class StoryFormComponent {
  constructor(private storyService: StoryService) {}
  isSubmitted = false;
  isDuplicate = false;
  storyForm = new FormGroup({
    name: new FormControl<string | null>('', Validators.required),
    point: new FormControl<number | null>(null, Validators.required),
  });

  createStories() {
    this.isSubmitted = true;
    if (!this.storyForm.valid) {
      return;
    }
    this.storyService.addStories(this.storyForm.value as IStoryData);
    this.storyForm.reset();
    this.isSubmitted = false;
  }

  get nameControl() {
    return this.storyForm.controls['name'];
  }
  get pointControl() {
    return this.storyForm.controls['point'];
  }
}
