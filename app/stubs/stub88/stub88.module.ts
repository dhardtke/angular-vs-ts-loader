import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub88Component} from "./stub88.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub88Component
        }])
    ],
    declarations: [
        Stub88Component
    ]
})
export class Stub88Module {

}
