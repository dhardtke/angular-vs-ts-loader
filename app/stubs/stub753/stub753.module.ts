import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub753Component} from "./stub753.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub753Component
        }])
    ],
    declarations: [
        Stub753Component
    ]
})
export class Stub753Module {

}
