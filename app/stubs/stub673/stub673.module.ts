import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub673Component} from "./stub673.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub673Component
        }])
    ],
    declarations: [
        Stub673Component
    ]
})
export class Stub673Module {

}
