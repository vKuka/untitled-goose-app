import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Photos, Photo, ParsedPhoto} from './photos';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) {
  }

  public getPhotos() {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Mountbit-Auth': localStorage.getItem('AUTH_TOKEN')
      })
    };
    return this.http.get(`https://saas.cloudike.com/api/2/users/${localStorage.getItem('USER_ID')}/photos/items/`, options).pipe(
      map((data: Photos) => {
        return this.parsePhotos(data._embedded.items);
      }));
  }

  public getPhoto(imgId: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Mountbit-Auth': localStorage.getItem('AUTH_TOKEN')
      })
    };
    return this.http.get(`https://saas.cloudike.com/api/2/users/${localStorage.getItem('USER_ID')}/photos/items/${imgId}`, options).pipe(
      map((photo: Photo) => {
        return this.parsePhoto(photo);
      }));
  }

  private parsePhotos(photos: Photo[]) {
    const parsedPhotos = {};
    photos.map((photo: Photo) => {
      const date = new Date(photo.created);
      const parsedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
      parsedPhotos[parsedDate] = parsedPhotos[parsedDate] instanceof Array ? parsedPhotos[parsedDate] : [];
      parsedPhotos[parsedDate].push(this.parsePhoto(photo));
    });
    return parsedPhotos;
  }

  private parsePhoto(photo: Photo): ParsedPhoto {
    return new ParsedPhoto(photo.id, photo._links.image_middle.href,  photo._links.image_preview.href);
  }
}
