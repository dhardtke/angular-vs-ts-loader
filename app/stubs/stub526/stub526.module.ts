import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub526Component} from "./stub526.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub526Component
        }])
    ],
    declarations: [
        Stub526Component
    ]
})
export class Stub526Module {

}
