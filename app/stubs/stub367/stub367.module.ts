import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub367Component} from "./stub367.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub367Component
        }])
    ],
    declarations: [
        Stub367Component
    ]
})
export class Stub367Module {

}
