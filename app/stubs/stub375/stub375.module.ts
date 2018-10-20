import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub375Component} from "./stub375.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub375Component
        }])
    ],
    declarations: [
        Stub375Component
    ]
})
export class Stub375Module {

}
