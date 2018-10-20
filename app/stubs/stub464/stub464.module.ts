import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub464Component} from "./stub464.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub464Component
        }])
    ],
    declarations: [
        Stub464Component
    ]
})
export class Stub464Module {

}
