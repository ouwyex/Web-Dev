import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;
  saving = false;
  errorMessage = '';
  private loadingGuard: ReturnType<typeof setTimeout> | null = null;

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

      this.loadAlbum(id);
    });
  }

  private loadAlbum(id: number): void {
    this.loading = true;
    this.errorMessage = '';
    this.album = null;

    if (this.loadingGuard) {
      clearTimeout(this.loadingGuard);
    }

    // Never leave the page in infinite loading state.
    this.loadingGuard = setTimeout(() => {
      if (this.loading) {
        this.loading = false;
        this.errorMessage = 'Request timeout while loading album details.';
      }
    }, 12000);

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.loading = false;
        if (this.loadingGuard) {
          clearTimeout(this.loadingGuard);
        }
      },
      error: (error) => {
        this.errorMessage = `Failed to load album details: ${error?.status ?? 'network error'}`;
        this.loading = false;
        if (this.loadingGuard) {
          clearTimeout(this.loadingGuard);
        }
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) {
      return;
    }

    const updatedAlbum: Album = {
      ...this.album,
      title: this.editedTitle.trim() || this.album.title
    };

    this.saving = true;
    this.errorMessage = '';

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.saving = false;
      },
      error: (error) => {
        this.errorMessage = `Failed to update album: ${error?.status ?? 'network error'}`;
        this.saving = false;
      }
    });
  }
}

