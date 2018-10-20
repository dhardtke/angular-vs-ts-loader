import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub46Component} from "./stub46.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub46Component
        }])
    ],
    declarations: [
        Stub46Component
    ]
})
export class Stub46Module {

}
