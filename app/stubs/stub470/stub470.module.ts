import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub470Component} from "./stub470.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub470Component
        }])
    ],
    declarations: [
        Stub470Component
    ]
})
export class Stub470Module {

}
