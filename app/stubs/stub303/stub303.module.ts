import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub303Component} from "./stub303.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub303Component
        }])
    ],
    declarations: [
        Stub303Component
    ]
})
export class Stub303Module {

}
