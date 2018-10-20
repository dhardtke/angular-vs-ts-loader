import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub712Component} from "./stub712.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub712Component
        }])
    ],
    declarations: [
        Stub712Component
    ]
})
export class Stub712Module {

}
