import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub486Component} from "./stub486.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub486Component
        }])
    ],
    declarations: [
        Stub486Component
    ]
})
export class Stub486Module {

}
