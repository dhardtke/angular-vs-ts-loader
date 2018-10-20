import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub720Component} from "./stub720.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub720Component
        }])
    ],
    declarations: [
        Stub720Component
    ]
})
export class Stub720Module {

}
