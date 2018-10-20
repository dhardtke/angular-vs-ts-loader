import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub319Component} from "./stub319.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub319Component
        }])
    ],
    declarations: [
        Stub319Component
    ]
})
export class Stub319Module {

}
