import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub143Component} from "./stub143.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub143Component
        }])
    ],
    declarations: [
        Stub143Component
    ]
})
export class Stub143Module {

}
