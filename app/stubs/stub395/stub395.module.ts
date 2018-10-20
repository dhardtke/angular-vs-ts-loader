import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub395Component} from "./stub395.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub395Component
        }])
    ],
    declarations: [
        Stub395Component
    ]
})
export class Stub395Module {

}
