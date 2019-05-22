import { container } from "./container";
import { Used } from "./used";

describe("test", () => {
    it("should run", () => {
        const used = container.get(Used);
        return used.test();
    })
});
