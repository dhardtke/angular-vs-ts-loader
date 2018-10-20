import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub563Component} from "./stub563.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub563Component
        }])
    ],
    declarations: [
        Stub563Component
    ]
})
export class Stub563Module {

}
