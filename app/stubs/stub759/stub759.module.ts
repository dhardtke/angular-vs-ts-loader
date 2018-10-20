import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub759Component} from "./stub759.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub759Component
        }])
    ],
    declarations: [
        Stub759Component
    ]
})
export class Stub759Module {

}
