import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub2Component} from "./stub2.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub2Component
        }])
    ],
    declarations: [
        Stub2Component
    ]
})
export class Stub2Module {

}
