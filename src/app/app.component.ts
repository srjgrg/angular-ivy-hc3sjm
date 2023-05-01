import {
  Component,
  DoCheck,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges, DoCheck {
  logs: string[] = [];
  textBoxValue: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push('On Changes is triggered');
  }

  ngDoCheck(): void {
    this.logs.push('Do Check is triggered');
  }

  onTextChnage(value: any) {
    // this.textBoxValue = value;
    this.textBoxValue.push(value);
    console.log('Text is getting chnaged');
  }
}
