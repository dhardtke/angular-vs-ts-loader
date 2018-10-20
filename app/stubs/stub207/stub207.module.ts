import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub207Component} from "./stub207.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub207Component
        }])
    ],
    declarations: [
        Stub207Component
    ]
})
export class Stub207Module {

}
