import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub889Component} from "./stub889.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub889Component
        }])
    ],
    declarations: [
        Stub889Component
    ]
})
export class Stub889Module {

}
