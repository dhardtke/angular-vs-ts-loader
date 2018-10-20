import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub295Component} from "./stub295.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub295Component
        }])
    ],
    declarations: [
        Stub295Component
    ]
})
export class Stub295Module {

}
