import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub468Component} from "./stub468.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub468Component
        }])
    ],
    declarations: [
        Stub468Component
    ]
})
export class Stub468Module {

}
