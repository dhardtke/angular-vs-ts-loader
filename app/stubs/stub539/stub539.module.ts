import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub539Component} from "./stub539.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub539Component
        }])
    ],
    declarations: [
        Stub539Component
    ]
})
export class Stub539Module {

}
