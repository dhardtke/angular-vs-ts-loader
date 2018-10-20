import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub47Component} from "./stub47.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub47Component
        }])
    ],
    declarations: [
        Stub47Component
    ]
})
export class Stub47Module {

}
