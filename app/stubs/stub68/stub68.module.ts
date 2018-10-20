import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub68Component} from "./stub68.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub68Component
        }])
    ],
    declarations: [
        Stub68Component
    ]
})
export class Stub68Module {

}
