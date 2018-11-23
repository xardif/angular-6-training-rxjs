import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Model } from "./repository.model";
import { HttpModule } from "@angular/http";
import { RestDataSource, REST_URL } from "./rest.datasource";
import { ModelResolver } from "./model.resolver";

@NgModule({
  imports: [HttpModule],
  providers: [Model, StaticDataSource, {
    provide: REST_URL,
    useValue: "http://localhost:3500/products"
  }, RestDataSource,ModelResolver]
})
export class ModelModule {}
