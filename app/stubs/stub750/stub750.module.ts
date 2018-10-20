import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub750Component} from "./stub750.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub750Component
        }])
    ],
    declarations: [
        Stub750Component
    ]
})
export class Stub750Module {

}
