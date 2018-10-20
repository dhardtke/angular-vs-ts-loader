import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub193Component} from "./stub193.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub193Component
        }])
    ],
    declarations: [
        Stub193Component
    ]
})
export class Stub193Module {

}
