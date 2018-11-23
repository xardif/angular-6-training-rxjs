import { Injectable } from "@angular/core";

@Injectable()
export class ValueService {
    getValue() {
        return "real value";
    }
}