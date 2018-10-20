import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub977Component} from "./stub977.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub977Component
        }])
    ],
    declarations: [
        Stub977Component
    ]
})
export class Stub977Module {

}
