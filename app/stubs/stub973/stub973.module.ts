import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub973Component} from "./stub973.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub973Component
        }])
    ],
    declarations: [
        Stub973Component
    ]
})
export class Stub973Module {

}
