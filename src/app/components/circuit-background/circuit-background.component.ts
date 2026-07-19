import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-circuit-background',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './circuit-background.component.html',
  styleUrls: ['./circuit-background.component.scss']
})
export class CircuitBackgroundComponent {}
