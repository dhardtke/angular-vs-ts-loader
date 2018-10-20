import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub172Component} from "./stub172.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub172Component
        }])
    ],
    declarations: [
        Stub172Component
    ]
})
export class Stub172Module {

}
