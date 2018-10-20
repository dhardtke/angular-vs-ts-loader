import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub921Component} from "./stub921.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub921Component
        }])
    ],
    declarations: [
        Stub921Component
    ]
})
export class Stub921Module {

}
