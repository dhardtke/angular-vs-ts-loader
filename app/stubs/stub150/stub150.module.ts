import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub150Component} from "./stub150.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub150Component
        }])
    ],
    declarations: [
        Stub150Component
    ]
})
export class Stub150Module {

}
