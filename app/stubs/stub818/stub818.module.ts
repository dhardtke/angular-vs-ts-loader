import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub818Component} from "./stub818.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub818Component
        }])
    ],
    declarations: [
        Stub818Component
    ]
})
export class Stub818Module {

}
