import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub488Component} from "./stub488.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub488Component
        }])
    ],
    declarations: [
        Stub488Component
    ]
})
export class Stub488Module {

}
