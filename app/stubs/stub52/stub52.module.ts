import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub52Component} from "./stub52.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub52Component
        }])
    ],
    declarations: [
        Stub52Component
    ]
})
export class Stub52Module {

}
