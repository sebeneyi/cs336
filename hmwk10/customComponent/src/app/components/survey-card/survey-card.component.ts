import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {

  constructor() { }

  @Input() question: string;
  @Input() minValue: string;
  @Input() maxValue: string;
  @Input() units?: string;

  @Output() result: EventEmitter<any> = new EventEmitter();

  public sliderChanged(event: any) {
    this.result.emit(event.value);
    // console.log(this.result);
  }

  ngOnInit(): void {
  }

}
