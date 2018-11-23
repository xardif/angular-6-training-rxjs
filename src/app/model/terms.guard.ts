import { Injectable } from "@angular/core";

@Injectable()
export class TermsGuard {

    canActivate(): boolean {
        return true;
    }

}