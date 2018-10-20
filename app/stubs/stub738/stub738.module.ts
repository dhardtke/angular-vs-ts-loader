import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub738Component} from "./stub738.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub738Component
        }])
    ],
    declarations: [
        Stub738Component
    ]
})
export class Stub738Module {

}
