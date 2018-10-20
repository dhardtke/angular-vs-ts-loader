import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub81Component} from "./stub81.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub81Component
        }])
    ],
    declarations: [
        Stub81Component
    ]
})
export class Stub81Module {

}
