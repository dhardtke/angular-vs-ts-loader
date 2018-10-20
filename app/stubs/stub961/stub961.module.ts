import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub961Component} from "./stub961.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub961Component
        }])
    ],
    declarations: [
        Stub961Component
    ]
})
export class Stub961Module {

}
