import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  albumId = 0;
  photos: Photo[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (!id) {
        this.loading = false;
        this.errorMessage = 'Invalid album id.';
        return;
      }

      this.albumId = id;
      this.loadPhotos();
    });
  }

  loadPhotos(): void {
    this.loading = true;
    this.errorMessage = '';

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = `Failed to load photos: ${error?.status ?? 'network error'}`;
        this.loading = false;
      }
    });
  }

  onImageError(event: Event, photo: Photo): void {
    const image = event.target as HTMLImageElement;
    const currentStage = image.dataset['fallbackStage'] ?? '0';

    if (currentStage === '0') {
      // Retry using full-size API image first.
      image.dataset['fallbackStage'] = '1';
      image.src = photo.url;
      return;
    }

    if (currentStage === '1') {
      // If placeholder domains are blocked, use a deterministic alternative host.
      image.dataset['fallbackStage'] = '2';
      image.src = `https://picsum.photos/seed/album-${photo.albumId}-photo-${photo.id}/150/150`;
      return;
    }

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><rect width='100%' height='100%' fill='#e2e8f0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#475569' font-family='Arial' font-size='13'>No preview</text></svg>`;
    image.dataset['fallbackStage'] = '3';
    image.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    image.alt = `${photo.title} (fallback)`;
  }
}
