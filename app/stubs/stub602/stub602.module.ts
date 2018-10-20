import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub602Component} from "./stub602.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub602Component
        }])
    ],
    declarations: [
        Stub602Component
    ]
})
export class Stub602Module {

}
