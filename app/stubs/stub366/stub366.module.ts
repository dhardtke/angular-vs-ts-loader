import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub366Component} from "./stub366.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub366Component
        }])
    ],
    declarations: [
        Stub366Component
    ]
})
export class Stub366Module {

}
