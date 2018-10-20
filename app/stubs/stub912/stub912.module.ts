import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub912Component} from "./stub912.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub912Component
        }])
    ],
    declarations: [
        Stub912Component
    ]
})
export class Stub912Module {

}
