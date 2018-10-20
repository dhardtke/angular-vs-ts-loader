import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub631Component} from "./stub631.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub631Component
        }])
    ],
    declarations: [
        Stub631Component
    ]
})
export class Stub631Module {

}
