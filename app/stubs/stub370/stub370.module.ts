import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub370Component} from "./stub370.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub370Component
        }])
    ],
    declarations: [
        Stub370Component
    ]
})
export class Stub370Module {

}
