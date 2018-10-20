import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub875Component} from "./stub875.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub875Component
        }])
    ],
    declarations: [
        Stub875Component
    ]
})
export class Stub875Module {

}
