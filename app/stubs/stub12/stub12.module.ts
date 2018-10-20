import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub12Component} from "./stub12.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub12Component
        }])
    ],
    declarations: [
        Stub12Component
    ]
})
export class Stub12Module {

}
