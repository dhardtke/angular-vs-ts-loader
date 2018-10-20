import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub938Component} from "./stub938.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub938Component
        }])
    ],
    declarations: [
        Stub938Component
    ]
})
export class Stub938Module {

}
