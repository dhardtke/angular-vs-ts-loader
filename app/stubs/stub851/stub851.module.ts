import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub851Component} from "./stub851.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub851Component
        }])
    ],
    declarations: [
        Stub851Component
    ]
})
export class Stub851Module {

}
