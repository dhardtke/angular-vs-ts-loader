import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub142Component} from "./stub142.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub142Component
        }])
    ],
    declarations: [
        Stub142Component
    ]
})
export class Stub142Module {

}
