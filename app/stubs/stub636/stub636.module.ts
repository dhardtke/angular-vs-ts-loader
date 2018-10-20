import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub636Component} from "./stub636.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub636Component
        }])
    ],
    declarations: [
        Stub636Component
    ]
})
export class Stub636Module {

}
