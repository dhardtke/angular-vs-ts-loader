import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub265Component} from "./stub265.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub265Component
        }])
    ],
    declarations: [
        Stub265Component
    ]
})
export class Stub265Module {

}
