import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub848Component} from "./stub848.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub848Component
        }])
    ],
    declarations: [
        Stub848Component
    ]
})
export class Stub848Module {

}
