import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub247Component} from "./stub247.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub247Component
        }])
    ],
    declarations: [
        Stub247Component
    ]
})
export class Stub247Module {

}
