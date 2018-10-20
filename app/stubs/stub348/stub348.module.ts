import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub348Component} from "./stub348.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub348Component
        }])
    ],
    declarations: [
        Stub348Component
    ]
})
export class Stub348Module {

}
