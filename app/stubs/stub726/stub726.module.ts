import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub726Component} from "./stub726.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub726Component
        }])
    ],
    declarations: [
        Stub726Component
    ]
})
export class Stub726Module {

}
