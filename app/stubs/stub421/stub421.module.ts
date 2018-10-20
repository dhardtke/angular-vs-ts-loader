import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub421Component} from "./stub421.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub421Component
        }])
    ],
    declarations: [
        Stub421Component
    ]
})
export class Stub421Module {

}
