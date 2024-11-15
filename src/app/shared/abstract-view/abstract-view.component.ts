import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { EventFeatureHandler } from '../features/event-feature-handler';
import { PresentFeatureHandler } from '../features/present-feature-handler';

@Component({ template: '' })
export abstract class AbstractViewComponent implements AfterViewInit {

    protected presentFeatures = new PresentFeatureHandler();
    protected eventFeatureHandler = new EventFeatureHandler();
    private changeDetectorRef = inject(ChangeDetectorRef);

    ngAfterViewInit(): void {
        this.createComponents();
        this.presentComponents();
        this.listenComponents();
        this.changeDetectorRef.detectChanges();
    }

    protected abstract createComponents(): void;
    protected abstract presentComponents(): void;
    protected abstract listenComponents(): void;
}
