import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub609Component} from "./stub609.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub609Component
        }])
    ],
    declarations: [
        Stub609Component
    ]
})
export class Stub609Module {

}
