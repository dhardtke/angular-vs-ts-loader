import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub517Component} from "./stub517.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub517Component
        }])
    ],
    declarations: [
        Stub517Component
    ]
})
export class Stub517Module {

}
