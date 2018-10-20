import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub543Component} from "./stub543.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub543Component
        }])
    ],
    declarations: [
        Stub543Component
    ]
})
export class Stub543Module {

}
