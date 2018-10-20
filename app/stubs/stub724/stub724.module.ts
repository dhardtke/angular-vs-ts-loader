import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub724Component} from "./stub724.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub724Component
        }])
    ],
    declarations: [
        Stub724Component
    ]
})
export class Stub724Module {

}
