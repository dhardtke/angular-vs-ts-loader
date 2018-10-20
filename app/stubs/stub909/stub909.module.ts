import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub909Component} from "./stub909.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub909Component
        }])
    ],
    declarations: [
        Stub909Component
    ]
})
export class Stub909Module {

}
