import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub552Component} from "./stub552.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub552Component
        }])
    ],
    declarations: [
        Stub552Component
    ]
})
export class Stub552Module {

}
