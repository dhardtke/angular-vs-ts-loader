import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub419Component} from "./stub419.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub419Component
        }])
    ],
    declarations: [
        Stub419Component
    ]
})
export class Stub419Module {

}
