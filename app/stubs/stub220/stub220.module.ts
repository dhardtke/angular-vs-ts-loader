import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub220Component} from "./stub220.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub220Component
        }])
    ],
    declarations: [
        Stub220Component
    ]
})
export class Stub220Module {

}
