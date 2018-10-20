import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub346Component} from "./stub346.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub346Component
        }])
    ],
    declarations: [
        Stub346Component
    ]
})
export class Stub346Module {

}
