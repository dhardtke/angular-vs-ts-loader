import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub537Component} from "./stub537.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub537Component
        }])
    ],
    declarations: [
        Stub537Component
    ]
})
export class Stub537Module {

}
