import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub650Component} from "./stub650.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub650Component
        }])
    ],
    declarations: [
        Stub650Component
    ]
})
export class Stub650Module {

}
