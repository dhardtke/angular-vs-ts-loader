import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub31Component} from "./stub31.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub31Component
        }])
    ],
    declarations: [
        Stub31Component
    ]
})
export class Stub31Module {

}
