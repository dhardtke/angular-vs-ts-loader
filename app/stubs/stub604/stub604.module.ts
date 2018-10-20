import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub604Component} from "./stub604.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub604Component
        }])
    ],
    declarations: [
        Stub604Component
    ]
})
export class Stub604Module {

}
