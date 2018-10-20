import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub943Component} from "./stub943.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub943Component
        }])
    ],
    declarations: [
        Stub943Component
    ]
})
export class Stub943Module {

}
