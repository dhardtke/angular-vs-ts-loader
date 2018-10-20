import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub155Component} from "./stub155.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub155Component
        }])
    ],
    declarations: [
        Stub155Component
    ]
})
export class Stub155Module {

}
