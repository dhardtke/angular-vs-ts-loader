import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub70Component} from "./stub70.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub70Component
        }])
    ],
    declarations: [
        Stub70Component
    ]
})
export class Stub70Module {

}
