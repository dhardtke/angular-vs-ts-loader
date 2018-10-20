import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub391Component} from "./stub391.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub391Component
        }])
    ],
    declarations: [
        Stub391Component
    ]
})
export class Stub391Module {

}
