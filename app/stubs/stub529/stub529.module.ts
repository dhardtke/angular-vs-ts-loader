import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub529Component} from "./stub529.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub529Component
        }])
    ],
    declarations: [
        Stub529Component
    ]
})
export class Stub529Module {

}
