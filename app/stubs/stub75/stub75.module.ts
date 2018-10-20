import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub75Component} from "./stub75.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub75Component
        }])
    ],
    declarations: [
        Stub75Component
    ]
})
export class Stub75Module {

}
