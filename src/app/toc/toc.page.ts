import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public appPages = [
   
    {
      title: 'Chapter 1',
      url: '/chapter1',
      icon: 'book',
      note: 'The Beach'
    },
    {
      title: 'Chapter 2',
      url: '/chapter2',
      icon: 'book',
      note: 'The Boat'
    },
    {
      title: 'Chapter 3',
      url: '/chapter3',
      icon: 'book',
      note: 'The Bay'
    },
    {
      title: 'Chapter 4',
      url: '/chapter4',
      icon: 'book',
      note: 'The Bouy'
    },
    {
      title: 'Chapter 5',
      url: '/chapter5',
      icon: 'book',
      note: 'The Bottle'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
