import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub822Component} from "./stub822.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub822Component
        }])
    ],
    declarations: [
        Stub822Component
    ]
})
export class Stub822Module {

}
