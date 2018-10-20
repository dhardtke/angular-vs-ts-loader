import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub515Component} from "./stub515.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub515Component
        }])
    ],
    declarations: [
        Stub515Component
    ]
})
export class Stub515Module {

}
