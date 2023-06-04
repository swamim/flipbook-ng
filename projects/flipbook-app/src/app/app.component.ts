import { Component, ElementRef, HostListener, OnInit, Type } from '@angular/core';
import { Book, FlipbookService, PageType } from '@swaminathan_mathivanan/flipbook';
import {SampleTableComponent} from './shared/sample-table/sample-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  get demoBook(): Book {
    return this.flipService.book;
  }

  startAt = 0;
  currentPage = 1;

  constructor(
    private elr: ElementRef,
    private flipService: FlipbookService,
  ) {
  }

  ngOnInit(): void {
    this.flipService.book = {
      width: 1190,
      height: 800,
      zoom: 1,
      cover: {
        front: {
          imageUrl: 'assets/demo/csPage.png',
        },
        back: {
          imageUrl: 'assets/demo/bg.png',
        }
      },
      pages: [
        { // start guard section
          /*imageUrl: 'assets/demo/guard.jpg',
          backgroundColor: '#41473A', // don't use if you want to see front-cover inverted image*/
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        }, // end guard section
        {  // start transparent-sheet section
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        }, // end transparent-sheet section
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        {
          backgroundColor: '#41473A',
          isComponent: true,
          component: SampleTableComponent
        },
        { // start guard section
          imageUrl: 'assets/demo/guard.jpg',
        },
        {
          imageUrl: 'assets/demo/guard.jpg',
          backgroundColor: '#41473A', // don't use if want to see back-cover inverted image
        }, // end guard section
      ],
      pageWidth: 585,
      pageHeight: 780,
      startPageType: PageType.Double,
      endPageType: PageType.Double
    } as Book;
  }

  onPrev(): void {
    this.flipService.prev.next();
  }

  onPlay(): void {
    this.flipService.play.next();
  }

  onPause(): void {
    this.flipService.pause.next();
  }

  onNext(): void {
    this.flipService.next.next();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (!this.flipService.book) { return; }
    const boundsWidth = this.elr.nativeElement.getBoundingClientRect().width * .8;
    const boundsHeight = this.elr.nativeElement.getBoundingClientRect().height * .6;
    this.flipService.book.zoom = Math.min(boundsWidth / this.flipService.book.width, boundsHeight / this.flipService.book.height);
  }

}
