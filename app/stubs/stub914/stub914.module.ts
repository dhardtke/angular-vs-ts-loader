import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub914Component} from "./stub914.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub914Component
        }])
    ],
    declarations: [
        Stub914Component
    ]
})
export class Stub914Module {

}
