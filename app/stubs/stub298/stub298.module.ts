import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub298Component} from "./stub298.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub298Component
        }])
    ],
    declarations: [
        Stub298Component
    ]
})
export class Stub298Module {

}
