import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body-part-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-part-detail.component.html',
  styleUrl: './body-part-detail.component.css'
})
export class BodyPartDetailComponent implements OnInit {
  bodyPart!: string;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.bodyPart = this.route.snapshot.paramMap.get('id')!;
  }


  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const context = this.canvas.nativeElement.getContext('2d');
          if (context) {
            context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            context.drawImage(img, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
          }
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
