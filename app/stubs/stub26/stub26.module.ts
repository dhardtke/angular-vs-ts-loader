import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub26Component} from "./stub26.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub26Component
        }])
    ],
    declarations: [
        Stub26Component
    ]
})
export class Stub26Module {

}
