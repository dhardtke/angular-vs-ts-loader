import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub334Component} from "./stub334.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub334Component
        }])
    ],
    declarations: [
        Stub334Component
    ]
})
export class Stub334Module {

}
