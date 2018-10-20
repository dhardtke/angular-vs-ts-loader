import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub217Component} from "./stub217.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub217Component
        }])
    ],
    declarations: [
        Stub217Component
    ]
})
export class Stub217Module {

}
