import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-diagram',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SafeHtmlPipe],
  templateUrl: './body-diagram.component.html',
  styleUrl: './body-diagram.component.css'
})
export class BodyDiagramComponent implements OnInit {
  svgContent!: SafeHtml;
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadSVG();
  }

  loadSVG() {
    this.http.get('assets/body-diagram.svg', { responseType: 'text' }).subscribe(data => {
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  onBodyPartClick(event: MouseEvent) {
    const clickedPart = (event.target as SVGElement).id;
    if (clickedPart) {
      this.router.navigate(['/body-part', clickedPart]);
    }
  }
}