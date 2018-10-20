import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub861Component} from "./stub861.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub861Component
        }])
    ],
    declarations: [
        Stub861Component
    ]
})
export class Stub861Module {

}
