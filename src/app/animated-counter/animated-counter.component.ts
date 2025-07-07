import { Component, Input, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-animated-counter',
  imports: [CommonModule],
  template: `
    <span class="block text-4xl font-bold text-black sm:text-5xl">
      <span class="counter-value"></span><span class="ml-1 suffix" [ngClass]="suffixClass">{{ suffix }}</span>
    </span>
  `,
})
export class AnimatedCounterComponent implements AfterViewInit {
  @Input() endVal!: number;
  @Input() duration: number = 2;
  @Input() suffix: string = '+';
  @Input() suffixClass: string = 'text-gray-500 text-2xl';

  private hasAnimated = false;

  constructor(
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    console.log('[Counter] AfterViewInit running');

    if (isPlatformBrowser(this.platformId)) {
      const el = this.elRef.nativeElement.querySelector('.counter-value');
      if (!el) {
        console.error('[Counter] Element not found');
        return;
      }

      const counter = new CountUp(el, this.endVal, {
        duration: this.duration
      });

      const startCount = () => {
        if (!this.hasAnimated && !counter.error) {
          counter.start();
          this.hasAnimated = true;
          console.log('[Counter] Count started');
        } else if (counter.error) {
          console.error('[Counter] CountUp error:', counter.error);
        }
      };

      const observer = new IntersectionObserver((entries, obs) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startCount();
          obs.unobserve(entry.target);
        }
      }, { threshold: 0.5 });

      observer.observe(this.elRef.nativeElement);

      // 👇 Fallback: If element is already visible, start count anyway
      setTimeout(() => {
        const rect = this.elRef.nativeElement.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        if (isVisible && !this.hasAnimated) {
          console.log('[Counter] Element already in view — fallback triggered');
          startCount();
          observer.unobserve(this.elRef.nativeElement);
        }
      }, 300); // Give Angular some time to finish layout
    }
  }


}
