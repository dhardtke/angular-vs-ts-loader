import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub254Component} from "./stub254.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub254Component
        }])
    ],
    declarations: [
        Stub254Component
    ]
})
export class Stub254Module {

}
