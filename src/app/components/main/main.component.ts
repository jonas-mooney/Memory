import { Component, signal, computed } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-main',
  imports: [PanelComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  gameTitle = 'memory';
  gameLength = signal('2 hours');
  showLengthOfTitle = computed(() => this.gameTitle.length);
}
