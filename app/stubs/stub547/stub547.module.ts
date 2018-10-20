import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub547Component} from "./stub547.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub547Component
        }])
    ],
    declarations: [
        Stub547Component
    ]
})
export class Stub547Module {

}
