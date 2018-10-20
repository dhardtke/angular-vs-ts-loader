import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub97Component} from "./stub97.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub97Component
        }])
    ],
    declarations: [
        Stub97Component
    ]
})
export class Stub97Module {

}
