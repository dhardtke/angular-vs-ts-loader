import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub644Component} from "./stub644.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub644Component
        }])
    ],
    declarations: [
        Stub644Component
    ]
})
export class Stub644Module {

}
