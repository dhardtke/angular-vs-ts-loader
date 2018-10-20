import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub345Component} from "./stub345.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub345Component
        }])
    ],
    declarations: [
        Stub345Component
    ]
})
export class Stub345Module {

}
