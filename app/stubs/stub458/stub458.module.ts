import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub458Component} from "./stub458.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub458Component
        }])
    ],
    declarations: [
        Stub458Component
    ]
})
export class Stub458Module {

}
