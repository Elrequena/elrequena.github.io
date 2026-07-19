import { Component, input, ChangeDetectionStrategy } from '@angular/core';

export interface Project {
  name: string;
  description: string;
  url: string;
  icon: string;
  gradient: string;
  status: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
