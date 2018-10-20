import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub487Component} from "./stub487.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub487Component
        }])
    ],
    declarations: [
        Stub487Component
    ]
})
export class Stub487Module {

}
