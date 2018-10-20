import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub120Component} from "./stub120.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub120Component
        }])
    ],
    declarations: [
        Stub120Component
    ]
})
export class Stub120Module {

}
