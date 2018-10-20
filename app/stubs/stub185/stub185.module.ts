import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub185Component} from "./stub185.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub185Component
        }])
    ],
    declarations: [
        Stub185Component
    ]
})
export class Stub185Module {

}
