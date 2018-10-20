import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub967Component} from "./stub967.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub967Component
        }])
    ],
    declarations: [
        Stub967Component
    ]
})
export class Stub967Module {

}
