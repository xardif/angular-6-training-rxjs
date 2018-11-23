import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { SharedState, SHARED_STATE } from "./sharedState.model";
import { Subject } from "rxjs";
import { RouterModule } from "@angular/router";
import { NotFOundComponent } from "./notFound.component";

@NgModule({
imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
declarations: [TableComponent, FormComponent, NotFOundComponent],
exports: [ModelModule, TableComponent, FormComponent],
providers: [{
    provide: SHARED_STATE,
    useValue: new Subject()
}]
})
export class CoreModule { }