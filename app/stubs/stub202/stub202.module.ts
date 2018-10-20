import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub202Component} from "./stub202.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub202Component
        }])
    ],
    declarations: [
        Stub202Component
    ]
})
export class Stub202Module {

}
