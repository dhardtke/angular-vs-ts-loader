import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub15Component} from "./stub15.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub15Component
        }])
    ],
    declarations: [
        Stub15Component
    ]
})
export class Stub15Module {

}
