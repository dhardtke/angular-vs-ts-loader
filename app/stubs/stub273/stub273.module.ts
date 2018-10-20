import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub273Component} from "./stub273.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub273Component
        }])
    ],
    declarations: [
        Stub273Component
    ]
})
export class Stub273Module {

}
