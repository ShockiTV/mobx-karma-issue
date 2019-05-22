import "reflect-metadata";
import { Container } from "inversify";
import { Imported} from "./imported";
import { Used } from "./used";

export const container = new Container();
container.bind<Imported>(Imported).toSelf();
container.bind<Used>(Used).toSelf();
