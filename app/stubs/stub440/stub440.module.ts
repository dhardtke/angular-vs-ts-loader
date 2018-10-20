import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub440Component} from "./stub440.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub440Component
        }])
    ],
    declarations: [
        Stub440Component
    ]
})
export class Stub440Module {

}
