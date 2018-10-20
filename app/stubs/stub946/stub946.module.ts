import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub946Component} from "./stub946.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub946Component
        }])
    ],
    declarations: [
        Stub946Component
    ]
})
export class Stub946Module {

}
