import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub535Component} from "./stub535.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub535Component
        }])
    ],
    declarations: [
        Stub535Component
    ]
})
export class Stub535Module {

}
