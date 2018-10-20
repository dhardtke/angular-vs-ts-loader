import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub711Component} from "./stub711.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub711Component
        }])
    ],
    declarations: [
        Stub711Component
    ]
})
export class Stub711Module {

}
