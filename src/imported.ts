import { action } from "mobx";
import { injectable } from "inversify";

@injectable()
export class Imported {
    public action = action;
    // public provider = Provider;
}