import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub876Component} from "./stub876.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub876Component
        }])
    ],
    declarations: [
        Stub876Component
    ]
})
export class Stub876Module {

}
