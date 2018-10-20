import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub95Component} from "./stub95.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub95Component
        }])
    ],
    declarations: [
        Stub95Component
    ]
})
export class Stub95Module {

}
