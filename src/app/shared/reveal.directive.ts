import { afterNextRender, Directive, ElementRef, inject, OnDestroy, Renderer2 } from '@angular/core';

@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      if (!('IntersectionObserver' in globalThis)) {
        this.renderer.addClass(this.element.nativeElement, 'is-visible');
        return;
      }

      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;
          this.renderer.addClass(this.element.nativeElement, 'is-visible');
          this.observer?.disconnect();
        },
        { threshold: 0.08, rootMargin: '0px 0px -35px' },
      );
      this.observer.observe(this.element.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
