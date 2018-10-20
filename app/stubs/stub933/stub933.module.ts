import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub933Component} from "./stub933.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub933Component
        }])
    ],
    declarations: [
        Stub933Component
    ]
})
export class Stub933Module {

}
