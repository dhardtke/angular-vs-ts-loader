import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub108Component} from "./stub108.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub108Component
        }])
    ],
    declarations: [
        Stub108Component
    ]
})
export class Stub108Module {

}
