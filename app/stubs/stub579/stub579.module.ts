import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub579Component} from "./stub579.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub579Component
        }])
    ],
    declarations: [
        Stub579Component
    ]
})
export class Stub579Module {

}
