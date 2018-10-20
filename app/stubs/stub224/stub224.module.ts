import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub224Component} from "./stub224.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub224Component
        }])
    ],
    declarations: [
        Stub224Component
    ]
})
export class Stub224Module {

}
