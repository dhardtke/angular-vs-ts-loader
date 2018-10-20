import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub212Component} from "./stub212.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub212Component
        }])
    ],
    declarations: [
        Stub212Component
    ]
})
export class Stub212Module {

}
