import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub313Component} from "./stub313.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub313Component
        }])
    ],
    declarations: [
        Stub313Component
    ]
})
export class Stub313Module {

}
