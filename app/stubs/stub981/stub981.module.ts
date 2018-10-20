import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub981Component} from "./stub981.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub981Component
        }])
    ],
    declarations: [
        Stub981Component
    ]
})
export class Stub981Module {

}
