import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub732Component} from "./stub732.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub732Component
        }])
    ],
    declarations: [
        Stub732Component
    ]
})
export class Stub732Module {

}
