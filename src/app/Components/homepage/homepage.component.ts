import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  @ViewChild('firstSection') firstSection!: ElementRef;
  @ViewChild('secondSection') secondSection!: ElementRef;

  ngAfterViewInit() {
    const options = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section: HTMLElement = entry.target as HTMLElement;
          // Execute your desired logic when the section becomes visible
          console.log('sections')
          section.classList.add('visible');
        }

        // observer.unobserve(entry.target)
      });
    }, options);

    observer.observe(this.firstSection.nativeElement);
    observer.observe(this.secondSection.nativeElement);
  }

}
