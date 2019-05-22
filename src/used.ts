import {action, IActionFactory} from "mobx";

export class Used {
    private action: IActionFactory;
    constructor() {
        this.action = action;
    }
}