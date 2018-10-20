import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub849Component} from "./stub849.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub849Component
        }])
    ],
    declarations: [
        Stub849Component
    ]
})
export class Stub849Module {

}
