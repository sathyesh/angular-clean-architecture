export abstract class Presenter<TView> {
    public viewModel: TView;

    constructor(private template: new() => TView,
    ) {
    }

    public reset(): void {
        const model = new this.template();

        if (this.viewModel == null) {
            this.viewModel = model;
        } else {
            Object.assign(this.viewModel, model);
        }
    }
}
