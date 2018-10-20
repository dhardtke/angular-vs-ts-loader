import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub770Component} from "./stub770.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub770Component
        }])
    ],
    declarations: [
        Stub770Component
    ]
})
export class Stub770Module {

}
