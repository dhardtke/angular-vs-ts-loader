import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub682Component} from "./stub682.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub682Component
        }])
    ],
    declarations: [
        Stub682Component
    ]
})
export class Stub682Module {

}
