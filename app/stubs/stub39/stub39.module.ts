import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub39Component} from "./stub39.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub39Component
        }])
    ],
    declarations: [
        Stub39Component
    ]
})
export class Stub39Module {

}
