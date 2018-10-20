import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub916Component} from "./stub916.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub916Component
        }])
    ],
    declarations: [
        Stub916Component
    ]
})
export class Stub916Module {

}
