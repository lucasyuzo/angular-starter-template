import { Subscription } from 'rxjs';
import { EventFeature } from './event.feature';

export class EventFeatureHandler {

    private features: EventFeature[] = [];
    private subscription: Subscription = new Subscription();

    add(feature: EventFeature): this {
        this.features.push(feature);
        return this;
    }

    subscribe(): void {
        this.features.forEach((feature: EventFeature) => {
            this.subscription.add(feature.subscribe());
        });
    }

    unsubscribe(): void {
        this.subscription.unsubscribe();
    }

}
