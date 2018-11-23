import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./core/form.component";
import { TableComponent } from "./core/table.component";
import { NotFOundComponent } from "./core/notFound.component";

const route: Routes = [
  { path: "form/create", component: FormComponent },
  { path: "form/:mode/:id", component: FormComponent },
  { path: "does", redirectTo: "form/create", pathMatch: "prefix" },
  { path: "table", redirectTo: "", pathMatch: "full" },
  { path: "", component: TableComponent }
  { path: "**", component:NotFOundComponent }
];

export const routing = RouterModule.forRoot(route);