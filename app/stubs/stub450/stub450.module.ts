import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub450Component} from "./stub450.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub450Component
        }])
    ],
    declarations: [
        Stub450Component
    ]
})
export class Stub450Module {

}
