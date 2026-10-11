import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import type { Project } from '../../models/project.model';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-project-details-modal',
  template: `
    <dialog
      #dialog
      class="project-dialog"
      [class.dialog-no-links]="project()?.links?.length === 0"
      [attr.aria-labelledby]="project() ? project()!.id + '-dialog-title' : null"
      (cancel)="dismissed.emit()"
      (close)="onNativeClose()"
      (click)="onBackdropClick($event)"
    >
      @if (project(); as current) {
        <div class="dialog-head">
          <div>
            <p class="project-type">{{ state.t(current.typeKey) }}</p>
            <h2 [id]="current.id + '-dialog-title'">{{ current.titleKey ? state.t(current.titleKey) : current.title }}</h2>
          </div>
          <button #closeButton class="dialog-close" type="button" [attr.aria-label]="state.t('closeDetails')" (click)="close()">×</button>
        </div>
        <p>{{ state.t(current.detailDescriptionKey) }}</p>

        <div class="project-gallery" [class.project-gallery-placeholder]="current.placeholder" [class.project-gallery-mixed]="current.id === 'shifaa'" [attr.aria-label]="current.title">
          @for (image of current.images; track image.src) {
            <img [src]="image.src" [alt]="state.t(image.altKey)" loading="lazy" width="900" height="1600" />
          }
        </div>

        @if (current.technologies.length) {
          <div class="tech-list" role="group" [attr.aria-label]="state.t('technologiesUsed')">
            @for (technology of current.technologies; track technology) { <span>{{ technology }}</span> }
          </div>
        }

        @if (current.detailGroups?.length) {
          <div class="dialog-columns">
            @for (group of current.detailGroups!; track group.titleKey) {
              <div>
                <h3>{{ state.t(group.titleKey) }}</h3>
                <ul>
                  @for (item of group.itemKeys; track item) { <li>{{ state.t(item) }}</li> }
                </ul>
              </div>
            }
          </div>
        }

        @if (current.links.length) {
          <div class="dialog-links">
            @for (link of current.links; track link.url; let first = $first) {
              <a class="button" [class.button-primary]="first" [class.button-secondary]="!first" [href]="link.url" target="_blank" rel="noopener noreferrer">{{ state.t(link.labelKey) }}</a>
            }
          </div>
        }
      }
    </dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsModalComponent {
  readonly project = input<Project | null>(null);
  readonly dismissed = output<void>();
  readonly state = inject(PortfolioStateService);
  private readonly document = inject(DOCUMENT);
  private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');
  private previouslyFocused: HTMLElement | null = null;

  constructor() {
    effect(() => {
      const project = this.project();
      const dialog = this.dialog()?.nativeElement;
      if (!dialog) return;

      if (project && !dialog.open) {
        this.previouslyFocused = this.document.activeElement instanceof HTMLElement ? this.document.activeElement : null;
        dialog.showModal();
        queueMicrotask(() => this.closeButton()?.nativeElement.focus());
      } else if (!project && dialog.open) {
        dialog.close();
      }
    });
  }

  close(): void {
    this.dialog()?.nativeElement.close();
  }

  onNativeClose(): void {
    if (this.project()) this.dismissed.emit();
    this.previouslyFocused?.focus();
    this.previouslyFocused = null;
  }

  onBackdropClick(event: MouseEvent): void {
    const dialog = this.dialog()?.nativeElement;
    if (!dialog || event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) dialog.close();
  }
}
