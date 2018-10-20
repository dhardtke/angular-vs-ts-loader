import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub222Component} from "./stub222.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub222Component
        }])
    ],
    declarations: [
        Stub222Component
    ]
})
export class Stub222Module {

}
