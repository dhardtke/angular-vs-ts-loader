import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub882Component} from "./stub882.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub882Component
        }])
    ],
    declarations: [
        Stub882Component
    ]
})
export class Stub882Module {

}
