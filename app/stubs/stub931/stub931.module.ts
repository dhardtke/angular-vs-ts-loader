import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub931Component} from "./stub931.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub931Component
        }])
    ],
    declarations: [
        Stub931Component
    ]
})
export class Stub931Module {

}
