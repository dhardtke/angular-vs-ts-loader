import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub846Component} from "./stub846.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub846Component
        }])
    ],
    declarations: [
        Stub846Component
    ]
})
export class Stub846Module {

}
