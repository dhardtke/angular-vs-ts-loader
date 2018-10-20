import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub629Component} from "./stub629.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub629Component
        }])
    ],
    declarations: [
        Stub629Component
    ]
})
export class Stub629Module {

}
