import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub129Component} from "./stub129.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub129Component
        }])
    ],
    declarations: [
        Stub129Component
    ]
})
export class Stub129Module {

}
