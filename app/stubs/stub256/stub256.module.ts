import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub256Component} from "./stub256.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub256Component
        }])
    ],
    declarations: [
        Stub256Component
    ]
})
export class Stub256Module {

}
