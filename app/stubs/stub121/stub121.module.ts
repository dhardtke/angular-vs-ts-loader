import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub121Component} from "./stub121.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub121Component
        }])
    ],
    declarations: [
        Stub121Component
    ]
})
export class Stub121Module {

}
