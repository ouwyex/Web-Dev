import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  errorMessage = '';

  constructor(private readonly albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.errorMessage = '';

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = `Failed to load albums: ${error?.status ?? 'network error'}`;
        this.loading = false;
      }
    });
  }

  deleteAlbum(albumId: number): void {
    this.albumService.deleteAlbum(albumId).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== albumId);
      },
      error: (error) => {
        this.errorMessage = `Failed to delete album: ${error?.status ?? 'network error'}`;
      }
    });
  }

  preloadPhotos(albumId: number): void {
    this.albumService.preloadAlbumPhotos(albumId);
  }
}

