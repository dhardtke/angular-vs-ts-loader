import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub501Component} from "./stub501.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub501Component
        }])
    ],
    declarations: [
        Stub501Component
    ]
})
export class Stub501Module {

}
