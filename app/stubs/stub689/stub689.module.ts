import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub689Component} from "./stub689.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub689Component
        }])
    ],
    declarations: [
        Stub689Component
    ]
})
export class Stub689Module {

}
