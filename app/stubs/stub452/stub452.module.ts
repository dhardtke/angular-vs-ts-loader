import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub452Component} from "./stub452.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub452Component
        }])
    ],
    declarations: [
        Stub452Component
    ]
})
export class Stub452Module {

}
