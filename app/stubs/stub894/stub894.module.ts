import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub894Component} from "./stub894.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub894Component
        }])
    ],
    declarations: [
        Stub894Component
    ]
})
export class Stub894Module {

}
