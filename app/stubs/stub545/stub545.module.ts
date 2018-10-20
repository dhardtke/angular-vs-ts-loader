import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub545Component} from "./stub545.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub545Component
        }])
    ],
    declarations: [
        Stub545Component
    ]
})
export class Stub545Module {

}
