import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub569Component} from "./stub569.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub569Component
        }])
    ],
    declarations: [
        Stub569Component
    ]
})
export class Stub569Module {

}
