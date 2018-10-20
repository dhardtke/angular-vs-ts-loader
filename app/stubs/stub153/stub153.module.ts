import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub153Component} from "./stub153.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub153Component
        }])
    ],
    declarations: [
        Stub153Component
    ]
})
export class Stub153Module {

}
