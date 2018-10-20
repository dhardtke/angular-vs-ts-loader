import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub561Component} from "./stub561.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub561Component
        }])
    ],
    declarations: [
        Stub561Component
    ]
})
export class Stub561Module {

}
