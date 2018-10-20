import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub278Component} from "./stub278.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub278Component
        }])
    ],
    declarations: [
        Stub278Component
    ]
})
export class Stub278Module {

}
