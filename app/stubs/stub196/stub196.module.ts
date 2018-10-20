import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub196Component} from "./stub196.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub196Component
        }])
    ],
    declarations: [
        Stub196Component
    ]
})
export class Stub196Module {

}
