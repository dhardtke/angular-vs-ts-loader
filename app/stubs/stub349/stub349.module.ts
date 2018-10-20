import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub349Component} from "./stub349.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub349Component
        }])
    ],
    declarations: [
        Stub349Component
    ]
})
export class Stub349Module {

}
