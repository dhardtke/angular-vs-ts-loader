import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub281Component} from "./stub281.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub281Component
        }])
    ],
    declarations: [
        Stub281Component
    ]
})
export class Stub281Module {

}
