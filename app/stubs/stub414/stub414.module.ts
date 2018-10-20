import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub414Component} from "./stub414.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub414Component
        }])
    ],
    declarations: [
        Stub414Component
    ]
})
export class Stub414Module {

}
