import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub79Component} from "./stub79.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub79Component
        }])
    ],
    declarations: [
        Stub79Component
    ]
})
export class Stub79Module {

}
