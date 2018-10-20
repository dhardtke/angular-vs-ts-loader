import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub232Component} from "./stub232.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub232Component
        }])
    ],
    declarations: [
        Stub232Component
    ]
})
export class Stub232Module {

}
