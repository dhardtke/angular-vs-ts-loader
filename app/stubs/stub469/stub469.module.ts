import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub469Component} from "./stub469.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub469Component
        }])
    ],
    declarations: [
        Stub469Component
    ]
})
export class Stub469Module {

}
