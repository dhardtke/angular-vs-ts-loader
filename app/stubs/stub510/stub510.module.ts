import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub510Component} from "./stub510.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub510Component
        }])
    ],
    declarations: [
        Stub510Component
    ]
})
export class Stub510Module {

}
