import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub189Component} from "./stub189.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub189Component
        }])
    ],
    declarations: [
        Stub189Component
    ]
})
export class Stub189Module {

}
