import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub341Component} from "./stub341.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub341Component
        }])
    ],
    declarations: [
        Stub341Component
    ]
})
export class Stub341Module {

}
