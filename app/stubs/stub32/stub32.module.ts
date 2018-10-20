import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub32Component} from "./stub32.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub32Component
        }])
    ],
    declarations: [
        Stub32Component
    ]
})
export class Stub32Module {

}
