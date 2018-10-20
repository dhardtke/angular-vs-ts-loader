import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub531Component} from "./stub531.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub531Component
        }])
    ],
    declarations: [
        Stub531Component
    ]
})
export class Stub531Module {

}
