import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub704Component} from "./stub704.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub704Component
        }])
    ],
    declarations: [
        Stub704Component
    ]
})
export class Stub704Module {

}
