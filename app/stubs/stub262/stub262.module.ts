import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub262Component} from "./stub262.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub262Component
        }])
    ],
    declarations: [
        Stub262Component
    ]
})
export class Stub262Module {

}
