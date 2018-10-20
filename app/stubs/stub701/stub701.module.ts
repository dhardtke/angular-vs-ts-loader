import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub701Component} from "./stub701.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub701Component
        }])
    ],
    declarations: [
        Stub701Component
    ]
})
export class Stub701Module {

}
