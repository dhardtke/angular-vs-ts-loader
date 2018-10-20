import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub581Component} from "./stub581.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub581Component
        }])
    ],
    declarations: [
        Stub581Component
    ]
})
export class Stub581Module {

}
