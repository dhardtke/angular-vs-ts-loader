import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub692Component} from "./stub692.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub692Component
        }])
    ],
    declarations: [
        Stub692Component
    ]
})
export class Stub692Module {

}
