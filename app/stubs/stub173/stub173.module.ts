import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub173Component} from "./stub173.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub173Component
        }])
    ],
    declarations: [
        Stub173Component
    ]
})
export class Stub173Module {

}
