import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub410Component} from "./stub410.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub410Component
        }])
    ],
    declarations: [
        Stub410Component
    ]
})
export class Stub410Module {

}
