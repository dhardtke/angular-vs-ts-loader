import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub976Component} from "./stub976.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub976Component
        }])
    ],
    declarations: [
        Stub976Component
    ]
})
export class Stub976Module {

}
