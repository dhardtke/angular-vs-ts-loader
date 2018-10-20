import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub176Component} from "./stub176.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub176Component
        }])
    ],
    declarations: [
        Stub176Component
    ]
})
export class Stub176Module {

}
