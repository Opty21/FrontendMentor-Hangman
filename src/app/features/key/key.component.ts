import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './key.component.html',
  styleUrl: './key.component.scss'
})
export class KeyComponent {
  @Input() used:boolean = true;
}
