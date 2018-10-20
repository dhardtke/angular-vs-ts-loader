import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub309Component} from "./stub309.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub309Component
        }])
    ],
    declarations: [
        Stub309Component
    ]
})
export class Stub309Module {

}
