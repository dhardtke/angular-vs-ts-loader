import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub608Component} from "./stub608.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub608Component
        }])
    ],
    declarations: [
        Stub608Component
    ]
})
export class Stub608Module {

}
