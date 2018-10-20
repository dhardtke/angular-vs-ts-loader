import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub3Component} from "./stub3.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub3Component
        }])
    ],
    declarations: [
        Stub3Component
    ]
})
export class Stub3Module {

}
