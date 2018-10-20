import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub203Component} from "./stub203.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub203Component
        }])
    ],
    declarations: [
        Stub203Component
    ]
})
export class Stub203Module {

}
