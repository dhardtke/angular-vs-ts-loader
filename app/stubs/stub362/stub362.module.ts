import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub362Component} from "./stub362.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub362Component
        }])
    ],
    declarations: [
        Stub362Component
    ]
})
export class Stub362Module {

}
