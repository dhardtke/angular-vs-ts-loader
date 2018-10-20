import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub54Component} from "./stub54.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub54Component
        }])
    ],
    declarations: [
        Stub54Component
    ]
})
export class Stub54Module {

}
