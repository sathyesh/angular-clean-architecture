export abstract class InteractionService {

    public abstract confirm(message: string): Promise<boolean>;

    public abstract enterString(currentValue?: string): Promise<string>;
}
