import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub805Component} from "./stub805.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub805Component
        }])
    ],
    declarations: [
        Stub805Component
    ]
})
export class Stub805Module {

}
