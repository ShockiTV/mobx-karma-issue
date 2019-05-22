import { inject, injectable } from "inversify";
import { Imported } from "./imported";

@injectable()
export class Used {
    @inject(Imported)
    private imported: Imported;

    public test = () => {
        return !!this.imported.action;
    }
}