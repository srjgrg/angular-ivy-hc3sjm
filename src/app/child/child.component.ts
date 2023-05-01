import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges, DoCheck {
  constructor() {}

  logs: string[] = [];

  @Input() inputValue: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push('On Changes is triggered');
  }

  ngDoCheck(): void {
    this.logs.push('Do Check is triggered');
  }
}
