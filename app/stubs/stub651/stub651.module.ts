import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub651Component} from "./stub651.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub651Component
        }])
    ],
    declarations: [
        Stub651Component
    ]
})
export class Stub651Module {

}
