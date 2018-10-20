import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub593Component} from "./stub593.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub593Component
        }])
    ],
    declarations: [
        Stub593Component
    ]
})
export class Stub593Module {

}
