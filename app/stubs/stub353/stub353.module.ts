import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub353Component} from "./stub353.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub353Component
        }])
    ],
    declarations: [
        Stub353Component
    ]
})
export class Stub353Module {

}
