import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub975Component} from "./stub975.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub975Component
        }])
    ],
    declarations: [
        Stub975Component
    ]
})
export class Stub975Module {

}
