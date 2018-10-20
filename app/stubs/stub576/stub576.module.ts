import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub576Component} from "./stub576.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub576Component
        }])
    ],
    declarations: [
        Stub576Component
    ]
})
export class Stub576Module {

}
