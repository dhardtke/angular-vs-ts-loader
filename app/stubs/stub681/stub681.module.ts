import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub681Component} from "./stub681.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub681Component
        }])
    ],
    declarations: [
        Stub681Component
    ]
})
export class Stub681Module {

}
