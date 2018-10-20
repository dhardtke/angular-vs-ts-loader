import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub83Component} from "./stub83.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub83Component
        }])
    ],
    declarations: [
        Stub83Component
    ]
})
export class Stub83Module {

}
