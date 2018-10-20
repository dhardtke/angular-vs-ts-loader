import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub263Component} from "./stub263.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub263Component
        }])
    ],
    declarations: [
        Stub263Component
    ]
})
export class Stub263Module {

}
