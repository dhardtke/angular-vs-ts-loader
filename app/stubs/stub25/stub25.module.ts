import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub25Component} from "./stub25.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub25Component
        }])
    ],
    declarations: [
        Stub25Component
    ]
})
export class Stub25Module {

}
