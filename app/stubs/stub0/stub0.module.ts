import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub0Component} from "./stub0.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub0Component
        }])
    ],
    declarations: [
        Stub0Component
    ]
})
export class Stub0Module {

}
