import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub455Component} from "./stub455.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub455Component
        }])
    ],
    declarations: [
        Stub455Component
    ]
})
export class Stub455Module {

}
