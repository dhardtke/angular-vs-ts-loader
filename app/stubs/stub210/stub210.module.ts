import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub210Component} from "./stub210.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub210Component
        }])
    ],
    declarations: [
        Stub210Component
    ]
})
export class Stub210Module {

}
