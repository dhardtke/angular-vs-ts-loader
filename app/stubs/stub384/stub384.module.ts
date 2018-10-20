import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub384Component} from "./stub384.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub384Component
        }])
    ],
    declarations: [
        Stub384Component
    ]
})
export class Stub384Module {

}
