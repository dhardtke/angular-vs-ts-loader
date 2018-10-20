import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub791Component} from "./stub791.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub791Component
        }])
    ],
    declarations: [
        Stub791Component
    ]
})
export class Stub791Module {

}
