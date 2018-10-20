import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub858Component} from "./stub858.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub858Component
        }])
    ],
    declarations: [
        Stub858Component
    ]
})
export class Stub858Module {

}
