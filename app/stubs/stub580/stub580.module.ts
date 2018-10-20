import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub580Component} from "./stub580.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub580Component
        }])
    ],
    declarations: [
        Stub580Component
    ]
})
export class Stub580Module {

}
