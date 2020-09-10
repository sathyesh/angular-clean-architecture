export interface IUseCase<TRequest, TPresenter> {
    readonly presenter: TPresenter;

    execute(request: TRequest): Promise<void>;
}
