import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub888Component} from "./stub888.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub888Component
        }])
    ],
    declarations: [
        Stub888Component
    ]
})
export class Stub888Module {

}
