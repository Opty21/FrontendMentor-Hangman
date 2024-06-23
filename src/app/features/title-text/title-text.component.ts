import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-text',
  standalone: true,
  imports: [],
  templateUrl: './title-text.component.html',
  styleUrl: './title-text.component.scss'
})
export class TitleTextComponent implements OnInit{
  @Input({required:true}) text:string = ""

  ngOnInit(): void {
    
  }
}
