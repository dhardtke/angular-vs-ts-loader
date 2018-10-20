import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub418Component} from "./stub418.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub418Component
        }])
    ],
    declarations: [
        Stub418Component
    ]
})
export class Stub418Module {

}
