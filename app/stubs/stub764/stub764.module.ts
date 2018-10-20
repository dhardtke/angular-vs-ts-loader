import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub764Component} from "./stub764.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub764Component
        }])
    ],
    declarations: [
        Stub764Component
    ]
})
export class Stub764Module {

}
