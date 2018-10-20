import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub305Component} from "./stub305.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub305Component
        }])
    ],
    declarations: [
        Stub305Component
    ]
})
export class Stub305Module {

}
