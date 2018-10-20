import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub825Component} from "./stub825.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub825Component
        }])
    ],
    declarations: [
        Stub825Component
    ]
})
export class Stub825Module {

}
