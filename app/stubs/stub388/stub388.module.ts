import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub388Component} from "./stub388.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub388Component
        }])
    ],
    declarations: [
        Stub388Component
    ]
})
export class Stub388Module {

}
