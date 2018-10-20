import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub102Component} from "./stub102.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub102Component
        }])
    ],
    declarations: [
        Stub102Component
    ]
})
export class Stub102Module {

}
