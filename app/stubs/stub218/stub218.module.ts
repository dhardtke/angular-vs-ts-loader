import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub218Component} from "./stub218.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub218Component
        }])
    ],
    declarations: [
        Stub218Component
    ]
})
export class Stub218Module {

}
