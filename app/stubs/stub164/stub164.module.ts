import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub164Component} from "./stub164.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub164Component
        }])
    ],
    declarations: [
        Stub164Component
    ]
})
export class Stub164Module {

}
