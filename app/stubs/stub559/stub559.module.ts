import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub559Component} from "./stub559.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub559Component
        }])
    ],
    declarations: [
        Stub559Component
    ]
})
export class Stub559Module {

}
