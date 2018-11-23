import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./core/form.component";
import { TableComponent } from "./core/table.component";
import { NotFoundComponent } from "./core/notFound.component";
import { ModelResolver } from "./model/model.resolver";
import { TermsGuard } from "./model/terms.guard";

const route: Routes = [
    { path: "form/create", component: FormComponent },
    { path: "form/:mode/:id", component: FormComponent, resolve: {anything: ModelResolver}, canActivate: [TermsGuard] },
    { path: "does", redirectTo: "form/create", pathMatch: "prefix" },
    { path: "table", redirectTo: "", pathMatch: "full" },
    { path: "table/:category", component: TableComponent, resolve: {anything: ModelResolver} },
    { path: "", component: TableComponent, resolve: {anything: ModelResolver} },
    { path: "**", component: NotFoundComponent },
];

export const routing = RouterModule.forRoot(route);
