import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub740Component} from "./stub740.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub740Component
        }])
    ],
    declarations: [
        Stub740Component
    ]
})
export class Stub740Module {

}
