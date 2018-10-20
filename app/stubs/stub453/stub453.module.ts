import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub453Component} from "./stub453.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub453Component
        }])
    ],
    declarations: [
        Stub453Component
    ]
})
export class Stub453Module {

}
