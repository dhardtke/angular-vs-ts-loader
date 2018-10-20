import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub343Component} from "./stub343.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub343Component
        }])
    ],
    declarations: [
        Stub343Component
    ]
})
export class Stub343Module {

}
