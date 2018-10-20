import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub998Component} from "./stub998.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub998Component
        }])
    ],
    declarations: [
        Stub998Component
    ]
})
export class Stub998Module {

}
