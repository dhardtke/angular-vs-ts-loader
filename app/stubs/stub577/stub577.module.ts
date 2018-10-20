import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub577Component} from "./stub577.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub577Component
        }])
    ],
    declarations: [
        Stub577Component
    ]
})
export class Stub577Module {

}
