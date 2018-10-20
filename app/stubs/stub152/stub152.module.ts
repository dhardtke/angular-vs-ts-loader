import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub152Component} from "./stub152.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub152Component
        }])
    ],
    declarations: [
        Stub152Component
    ]
})
export class Stub152Module {

}
