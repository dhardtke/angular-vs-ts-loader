import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub33Component} from "./stub33.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub33Component
        }])
    ],
    declarations: [
        Stub33Component
    ]
})
export class Stub33Module {

}
