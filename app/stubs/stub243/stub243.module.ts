import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub243Component} from "./stub243.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub243Component
        }])
    ],
    declarations: [
        Stub243Component
    ]
})
export class Stub243Module {

}
