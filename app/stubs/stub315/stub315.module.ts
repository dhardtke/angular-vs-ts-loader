import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub315Component} from "./stub315.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub315Component
        }])
    ],
    declarations: [
        Stub315Component
    ]
})
export class Stub315Module {

}
