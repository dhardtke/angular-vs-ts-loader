import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub985Component} from "./stub985.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub985Component
        }])
    ],
    declarations: [
        Stub985Component
    ]
})
export class Stub985Module {

}
