import { PresentFeature } from './present.feature';

export class PresentFeatureHandler {

    private features: PresentFeature[] = [];

    add(feature: PresentFeature): this {
        this.features.push(feature);
        return this;
    }

    process(): void {
        this.features.forEach((feature: PresentFeature) => {
            feature.process();
        });
    }

}
