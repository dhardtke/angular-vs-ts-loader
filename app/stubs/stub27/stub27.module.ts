import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub27Component} from "./stub27.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub27Component
        }])
    ],
    declarations: [
        Stub27Component
    ]
})
export class Stub27Module {

}
