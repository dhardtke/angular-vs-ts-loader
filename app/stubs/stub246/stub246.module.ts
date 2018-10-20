import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub246Component} from "./stub246.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub246Component
        }])
    ],
    declarations: [
        Stub246Component
    ]
})
export class Stub246Module {

}
