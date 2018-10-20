import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub93Component} from "./stub93.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub93Component
        }])
    ],
    declarations: [
        Stub93Component
    ]
})
export class Stub93Module {

}
