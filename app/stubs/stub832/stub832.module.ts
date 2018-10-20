import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub832Component} from "./stub832.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub832Component
        }])
    ],
    declarations: [
        Stub832Component
    ]
})
export class Stub832Module {

}
