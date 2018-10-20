import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub312Component} from "./stub312.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub312Component
        }])
    ],
    declarations: [
        Stub312Component
    ]
})
export class Stub312Module {

}
