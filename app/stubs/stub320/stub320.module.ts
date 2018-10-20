import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub320Component} from "./stub320.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub320Component
        }])
    ],
    declarations: [
        Stub320Component
    ]
})
export class Stub320Module {

}
