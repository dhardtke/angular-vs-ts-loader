import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub59Component} from "./stub59.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub59Component
        }])
    ],
    declarations: [
        Stub59Component
    ]
})
export class Stub59Module {

}
