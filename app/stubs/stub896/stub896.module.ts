import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub896Component} from "./stub896.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub896Component
        }])
    ],
    declarations: [
        Stub896Component
    ]
})
export class Stub896Module {

}
