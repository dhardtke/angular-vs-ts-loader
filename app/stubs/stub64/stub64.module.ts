import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub64Component} from "./stub64.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub64Component
        }])
    ],
    declarations: [
        Stub64Component
    ]
})
export class Stub64Module {

}
