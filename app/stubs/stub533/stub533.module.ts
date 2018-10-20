import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub533Component} from "./stub533.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub533Component
        }])
    ],
    declarations: [
        Stub533Component
    ]
})
export class Stub533Module {

}
