import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub857Component} from "./stub857.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub857Component
        }])
    ],
    declarations: [
        Stub857Component
    ]
})
export class Stub857Module {

}
