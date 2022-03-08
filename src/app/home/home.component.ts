import { Component, OnInit } from '@angular/core';
import { buttonList } from '../../utils/buttonList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttons = buttonList;

  constructor() { }

  ngOnInit(): void {
  }

}
