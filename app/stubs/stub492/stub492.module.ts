import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub492Component} from "./stub492.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub492Component
        }])
    ],
    declarations: [
        Stub492Component
    ]
})
export class Stub492Module {

}
