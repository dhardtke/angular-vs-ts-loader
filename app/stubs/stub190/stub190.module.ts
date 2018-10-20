import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub190Component} from "./stub190.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub190Component
        }])
    ],
    declarations: [
        Stub190Component
    ]
})
export class Stub190Module {

}
