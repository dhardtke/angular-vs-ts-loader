import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub406Component} from "./stub406.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub406Component
        }])
    ],
    declarations: [
        Stub406Component
    ]
})
export class Stub406Module {

}
