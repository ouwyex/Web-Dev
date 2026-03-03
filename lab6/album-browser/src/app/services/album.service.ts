import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, timeout } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

interface BackupData {
  albums: Album[];
  photos: Photo[];
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';
  private readonly backupUrl = 'https://raw.githubusercontent.com/typicode/jsonplaceholder/master/data.json';

  private albumsRequest$?: Observable<Album[]>;
  private backupData$?: Observable<BackupData>;
  private readonly photoRequests = new Map<number, Observable<Photo[]>>();

  constructor(private readonly http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    if (!this.albumsRequest$) {
      this.albumsRequest$ = this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
        timeout(4000),
        catchError(() => this.getBackupData().pipe(map((data) => data.albums))),
        shareReplay(1)
      );
    }

    return this.albumsRequest$;
  }

  getAlbum(id: number): Observable<Album> {
    return this.getAlbums().pipe(
      map((albums) => {
        const album = albums.find((item) => item.id === id);
        if (!album) {
          throw new Error('Album not found');
        }
        return album;
      })
    );
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    const cached = this.photoRequests.get(id);
    if (cached) {
      return cached;
    }

    const request$ = this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`).pipe(
      timeout(4000),
      catchError(() =>
        this.getBackupData().pipe(
          map((data) => data.photos.filter((photo) => photo.albumId === id))
        )
      ),
      shareReplay(1)
    );

    this.photoRequests.set(id, request$);
    return request$;
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album).pipe(
      timeout(4000),
      map((updated) => {
        this.albumsRequest$ = undefined;
        return updated;
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`).pipe(
      timeout(4000),
      map(() => {
        this.albumsRequest$ = undefined;
        this.photoRequests.delete(id);
        return void 0;
      })
    );
  }

  preloadAlbums(): void {
    this.getAlbums().subscribe({
      next: () => {},
      error: () => {
        this.albumsRequest$ = undefined;
      }
    });
  }

  preloadAlbumPhotos(id: number): void {
    this.getAlbumPhotos(id).subscribe({
      next: () => {},
      error: () => {
        this.photoRequests.delete(id);
      }
    });
  }

  private getBackupData(): Observable<BackupData> {
    if (!this.backupData$) {
      this.backupData$ = this.http.get<BackupData>(this.backupUrl).pipe(
        timeout(5000),
        catchError((error) => {
          this.backupData$ = undefined;
          return throwError(() => error);
        }),
        shareReplay(1)
      );
    }

    return this.backupData$;
  }
}
