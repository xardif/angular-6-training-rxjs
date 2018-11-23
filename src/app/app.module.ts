import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";
import { MessageModule } from "./messages/message.module";
import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { TermsGuard } from "./model/terms.guard";

@NgModule({
  imports: [BrowserModule, ModelModule, CoreModule, MessageModule, routing],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [TermsGuard]
})
export class AppModule {}
