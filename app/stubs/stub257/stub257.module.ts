import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub257Component} from "./stub257.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub257Component
        }])
    ],
    declarations: [
        Stub257Component
    ]
})
export class Stub257Module {

}
