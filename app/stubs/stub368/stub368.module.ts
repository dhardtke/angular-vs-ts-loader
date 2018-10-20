import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub368Component} from "./stub368.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub368Component
        }])
    ],
    declarations: [
        Stub368Component
    ]
})
export class Stub368Module {

}
