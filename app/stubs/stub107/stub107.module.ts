import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub107Component} from "./stub107.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub107Component
        }])
    ],
    declarations: [
        Stub107Component
    ]
})
export class Stub107Module {

}
