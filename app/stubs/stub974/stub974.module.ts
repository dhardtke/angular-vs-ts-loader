import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub974Component} from "./stub974.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub974Component
        }])
    ],
    declarations: [
        Stub974Component
    ]
})
export class Stub974Module {

}
