import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub776Component} from "./stub776.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub776Component
        }])
    ],
    declarations: [
        Stub776Component
    ]
})
export class Stub776Module {

}
