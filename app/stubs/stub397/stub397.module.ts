import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub397Component} from "./stub397.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub397Component
        }])
    ],
    declarations: [
        Stub397Component
    ]
})
export class Stub397Module {

}
