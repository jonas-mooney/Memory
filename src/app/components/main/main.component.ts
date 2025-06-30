import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  gameTitle = 'memory';
  gameLength = signal('2 hours');
  showLengthOfTitle = computed(() => this.gameTitle.length);
}
