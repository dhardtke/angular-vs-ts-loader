import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub710Component} from "./stub710.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub710Component
        }])
    ],
    declarations: [
        Stub710Component
    ]
})
export class Stub710Module {

}
