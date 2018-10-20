import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub969Component} from "./stub969.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub969Component
        }])
    ],
    declarations: [
        Stub969Component
    ]
})
export class Stub969Module {

}
