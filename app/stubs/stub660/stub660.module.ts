import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub660Component} from "./stub660.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub660Component
        }])
    ],
    declarations: [
        Stub660Component
    ]
})
export class Stub660Module {

}
