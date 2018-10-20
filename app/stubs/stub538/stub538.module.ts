import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub538Component} from "./stub538.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub538Component
        }])
    ],
    declarations: [
        Stub538Component
    ]
})
export class Stub538Module {

}
