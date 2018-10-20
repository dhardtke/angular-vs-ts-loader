import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub118Component} from "./stub118.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub118Component
        }])
    ],
    declarations: [
        Stub118Component
    ]
})
export class Stub118Module {

}
