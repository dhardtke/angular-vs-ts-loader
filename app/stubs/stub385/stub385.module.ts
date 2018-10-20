import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub385Component} from "./stub385.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub385Component
        }])
    ],
    declarations: [
        Stub385Component
    ]
})
export class Stub385Module {

}
