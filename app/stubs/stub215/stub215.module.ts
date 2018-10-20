import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub215Component} from "./stub215.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub215Component
        }])
    ],
    declarations: [
        Stub215Component
    ]
})
export class Stub215Module {

}
