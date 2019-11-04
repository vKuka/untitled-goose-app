import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {TimelineService} from '../timeline.service';
import {ParsedPhoto} from '../photos';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  providers: [TimelineService],
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  imgId: string;
  photo: ParsedPhoto;

  constructor(private router: Router, private route: ActivatedRoute, private timelineService: TimelineService) {
  }

  ngOnInit() {
    this.imgId = this.route.snapshot.params.imgId;
    this.getPhoto();
  }

  getPhoto(): void {
    this.timelineService.getPhoto(this.imgId).subscribe((photo: ParsedPhoto) => {
      this.photo = photo;
    });
  }

  goToTimeline(): void {
    this.router.navigateByUrl('/timeline');
  }
}
