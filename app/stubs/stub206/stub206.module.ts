import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub206Component} from "./stub206.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub206Component
        }])
    ],
    declarations: [
        Stub206Component
    ]
})
export class Stub206Module {

}
