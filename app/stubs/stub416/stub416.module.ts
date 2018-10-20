import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub416Component} from "./stub416.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub416Component
        }])
    ],
    declarations: [
        Stub416Component
    ]
})
export class Stub416Module {

}
