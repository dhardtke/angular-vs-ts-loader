import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub762Component} from "./stub762.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub762Component
        }])
    ],
    declarations: [
        Stub762Component
    ]
})
export class Stub762Module {

}
