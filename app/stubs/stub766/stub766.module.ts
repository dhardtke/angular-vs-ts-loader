import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub766Component} from "./stub766.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub766Component
        }])
    ],
    declarations: [
        Stub766Component
    ]
})
export class Stub766Module {

}
