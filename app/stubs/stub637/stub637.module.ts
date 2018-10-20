import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub637Component} from "./stub637.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub637Component
        }])
    ],
    declarations: [
        Stub637Component
    ]
})
export class Stub637Module {

}
