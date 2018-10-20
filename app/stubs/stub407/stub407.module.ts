import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub407Component} from "./stub407.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub407Component
        }])
    ],
    declarations: [
        Stub407Component
    ]
})
export class Stub407Module {

}
