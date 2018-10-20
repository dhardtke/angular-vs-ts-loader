import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub448Component} from "./stub448.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub448Component
        }])
    ],
    declarations: [
        Stub448Component
    ]
})
export class Stub448Module {

}
