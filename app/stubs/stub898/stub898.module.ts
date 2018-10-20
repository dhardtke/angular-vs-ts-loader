import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub898Component} from "./stub898.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub898Component
        }])
    ],
    declarations: [
        Stub898Component
    ]
})
export class Stub898Module {

}
