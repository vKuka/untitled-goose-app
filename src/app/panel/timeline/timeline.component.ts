import {Component, OnInit} from '@angular/core';
import {TimelineService} from '../timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  providers: [TimelineService],
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  photos = {};

  constructor(private timelineService: TimelineService) {
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.timelineService.getPhotos().subscribe((photos) => {
      this.photos = photos;
    });
  }
}
