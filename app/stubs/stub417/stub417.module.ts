import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub417Component} from "./stub417.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub417Component
        }])
    ],
    declarations: [
        Stub417Component
    ]
})
export class Stub417Module {

}
