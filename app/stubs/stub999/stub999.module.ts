import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub999Component} from "./stub999.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub999Component
        }])
    ],
    declarations: [
        Stub999Component
    ]
})
export class Stub999Module {

}
