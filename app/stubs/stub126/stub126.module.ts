import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub126Component} from "./stub126.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub126Component
        }])
    ],
    declarations: [
        Stub126Component
    ]
})
export class Stub126Module {

}
