import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub718Component} from "./stub718.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub718Component
        }])
    ],
    declarations: [
        Stub718Component
    ]
})
export class Stub718Module {

}
