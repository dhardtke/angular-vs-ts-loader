import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub10Component} from "./stub10.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub10Component
        }])
    ],
    declarations: [
        Stub10Component
    ]
})
export class Stub10Module {

}
