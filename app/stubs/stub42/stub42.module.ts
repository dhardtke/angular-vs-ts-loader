import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub42Component} from "./stub42.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub42Component
        }])
    ],
    declarations: [
        Stub42Component
    ]
})
export class Stub42Module {

}
