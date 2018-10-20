import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub615Component} from "./stub615.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub615Component
        }])
    ],
    declarations: [
        Stub615Component
    ]
})
export class Stub615Module {

}
