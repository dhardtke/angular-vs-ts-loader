import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub634Component} from "./stub634.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub634Component
        }])
    ],
    declarations: [
        Stub634Component
    ]
})
export class Stub634Module {

}
