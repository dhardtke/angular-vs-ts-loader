import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub754Component} from "./stub754.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub754Component
        }])
    ],
    declarations: [
        Stub754Component
    ]
})
export class Stub754Module {

}
