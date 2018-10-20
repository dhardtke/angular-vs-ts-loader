import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub499Component} from "./stub499.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub499Component
        }])
    ],
    declarations: [
        Stub499Component
    ]
})
export class Stub499Module {

}
