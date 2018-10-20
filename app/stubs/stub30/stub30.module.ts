import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub30Component} from "./stub30.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub30Component
        }])
    ],
    declarations: [
        Stub30Component
    ]
})
export class Stub30Module {

}
