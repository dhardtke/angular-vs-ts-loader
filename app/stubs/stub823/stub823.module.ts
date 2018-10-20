import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub823Component} from "./stub823.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub823Component
        }])
    ],
    declarations: [
        Stub823Component
    ]
})
export class Stub823Module {

}
