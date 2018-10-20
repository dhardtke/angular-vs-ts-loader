import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub383Component} from "./stub383.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub383Component
        }])
    ],
    declarations: [
        Stub383Component
    ]
})
export class Stub383Module {

}
